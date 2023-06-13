const stream = require("stream")
const BlogModel = require("../models/Blog.model");
const CatchAsync = require("../utility/CatchAsync");
const APIError = require("../utility/ApiError");
const cloudinary = require("cloudinary").v2
class BlogController {
    static recordsPerPage = 11
    // create a blog post
    static createBlog = CatchAsync(async (req, res) => {
        let { title, body, category, subCategory, youtubeUrl } = req.body
        if (!req.file) throw new APIError(402, "image is required")

        let validBlog = BlogModel.validateBlog(title, body, category)

        // upload image
        const readableStream = new stream.PassThrough();
        readableStream.end(req.file.buffer);

        try {
            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.CLOUD_API_KEY,
                api_secret: process.env.CLOUD_API_SECRET,
            })
            const options = {
                folder: "blog_images",
                crop: "scale",
                public_id: `${Date.now()}`,
                resource_type: "auto",
            }
            const uploadStream = cloudinary.uploader.upload_stream(options, async (error, result) => {
                if (error) {
                    return res.status(500).send('Failed to upload file to Cloudinary');
                }
                let myCloud = result
                console.log(result.secure_url);
                if (validBlog) {
                    await BlogModel.createBlog(title, body, myCloud.secure_url, category, subCategory, youtubeUrl)
                } else {
                    throw new APIError(402, "Validation error")
                }
                res.status(200).json({
                    success: true,
                    message: "Blog is successfully created"
                })
            });
            readableStream.pipe(uploadStream);
        } catch (err) {
            throw new APIError(500, "Internal server error - cloudinary")
        }
    })
    // get all blogs
    static getAllBlogs = CatchAsync(async (req, res) => {
        let category = req.query.category || ""
        let subCategory = req.query.subCategory || ""
        let pageNo = req.query.page || 1

        let query
        if (category && subCategory) {
            query = {
                "subCategory": subCategory,
                "category": category
            }
        } else if (!category && subCategory) {
            query = {
                "subCategory": subCategory
            }
        } else if (category && !subCategory) {
            query = {
                "category": category
            }
        }

        let blogs = await BlogModel.find(query).sort({ _id: -1 }).skip((pageNo - 1) * this.recordsPerPage)
            .limit(this.recordsPerPage)

        res.status(200).json({
            success: true,
            page: pageNo,
            blogsLength: blogs.length,
            blogs
        })
    })

    static getArchiveBlogs = CatchAsync(async (req, res) => {
        let docs = null

        await BlogModel.aggregate([
            // Group the documents by category
            { $group: { _id: "$category", docs: { $push: "$$ROOT" } } },
            // Sort the documents by date in descending order
            { $unwind: "$docs" },
            { $sort: { "docs.date": -1 } },
            // Skip the last 10 documents for each group
            { $group: { _id: "$_id", docs: { $push: "$docs" }, count: { $sum: 1 } } },
            { $project: { docs: { $slice: ["$docs", 0, { $subtract: ["$count", 0] }] } } }
        ]).then(function (result) {
            // Flatten the array of documents for each category
            docs = result.flatMap(function (category) {
                return category.docs;
            });
        }).catch(function (err) {
            console.log(err)
            throw new APIError(500, "error occured while fetching data " + err)
        });
        res.status(200).json({
            success: true,
            // page: pageNo,
            blogsLength: docs?.length,
            blogs: docs
        })
    })
    // delete a blog post
    static deleteBlog = CatchAsync(async (req, res) => {
        let { blogId } = req.body

        let targetBlog = await BlogModel.getBlog(blogId)
        if (targetBlog) {
            await BlogModel.deleteBlog(blogId)
        } else {
            throw new APIError(404, "blog not found")
        }
        res.status(200).json({
            success: true,
            message: "Blog is successfully deleted"
        })
    })
    // update a blog post
    static updateBlog = CatchAsync(async (req, res) => {
        let { blogId } = req.body
        let { title, body, url, category } = req.body

        let targetBlog = await BlogModel.getBlog(blogId)

        if (!targetBlog) {
            throw new APIError(404, "blog not found")
        }

        let validBlog = BlogModel.validateBlog(title, body, url, category)

        if (!validBlog) {
            throw new APIError(402, "Validation error")
        }

        let updated = await targetBlog.updateBlog(title, body, url, category)
        if (!updated) throw new APIError(402, "Validation error")
        res.status(200).json({
            success: true,
            message: "Blog is successfully updated"
        })
    })
    // get a single blog
    static getSingleBlog = CatchAsync(async (req, res) => {
        let id = req.params.id

        let blog = await BlogModel.getBlog(id)
        if (!blog) throw new APIError(404, "no blog found against this id")
        res.status(200).json({
            success: true,
            blog
        })
    })
}

module.exports = BlogController
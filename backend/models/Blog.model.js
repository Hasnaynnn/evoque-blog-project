const mongoose = require("mongoose")
const APIError = require("../utility/ApiError")
const BlogCategory = require("../utility/categories")


const Blog = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title field can not be empty"],
        maxLength: [200, "blog title must be less than 200 chars"],
        minLength: [1, "blog title must be more than 1 chars"],
    },
    body: {
        type: String,
        required: [true, "blog body field can not be empty"],
        minLength: [1, "blog body must be between 1 to 100000"],
        maxLength: [100000, "product price must be between 1 to 100000"]
    },
    image: {
        type: String,
        required: ["true", "image can  not be empty"]
    },
    category: {
        type: String,
        required: [true, "blog must have one category"]
    },
    subCategory: {
        type: String,
        required: [true, "blog must have one sub category"]
    },
    youtubeUrl: String,
})

Blog.statics.validateBlog = function (title, body, category) {
    if (!title) throw new APIError(402, "title field can not be empty")
    else if (!body) throw new APIError(402, "body field can not be empty")
    else if (!category) throw new APIError(402, "category field can not be empty")
    else if (BlogCategory.validateBlogCategory(category)) throw new APIError(402, "enter valid category")
    else return true
}

Blog.statics.createBlog = async function (title, body, url, category, subCategory, youtubeUrl = "") {
    try {
        await this.create({
            title,
            body,
            image: url,
            category,
            subCategory,
            youtubeUrl: youtubeUrl
        })
    } catch (err) {
        throw new APIError(402, err)
    }
}

Blog.statics.getBlog = async function (blogId) {
    return await this.findById(blogId)
}

Blog.statics.deleteBlog = async function (blogId) {
    try {
        await this.findByIdAndDelete(blogId)
    } catch (err) {
        throw new APIError(404, "blog not found or issue")
    }
}

Blog.methods.updateBlog = async function (title, body, url, category) {
    if (!BlogCategory.validateBlogCategory(category)) throw new APIError(402, "enter valid category")
    try {
        if (title) this.title = title
        if (body) this.body = body
        if (url) this.video[0] = url
        if (category) this.category = category

        await this.save()
        return true
    } catch (err) {
        throw new APIError(402, "blog can't be updated")
    }
}
module.exports = mongoose.model("blog", Blog)
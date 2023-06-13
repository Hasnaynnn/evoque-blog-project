const BlogController = require("../controllers/blog.controller")
const upload = require("../utility/Multer")

const Router = require("express").Router()

Router.route("/blogs").get(BlogController.getAllBlogs)
Router.route("/blogs/all").get(BlogController.getArchiveBlogs)
Router.route("/blogs/:id").get(BlogController.getSingleBlog)
Router.route("/blog/create").post(upload.single("image"), BlogController.createBlog)
Router.route("/blog/update").post(BlogController.updateBlog)
Router.route("/blog/delete").post(BlogController.deleteBlog)

module.exports = Router

import axios from "axios"
import { motion } from "framer-motion"
import { useState } from "react"
import styles from "../styles/components.module.css"
import requestConfig from "../utils/config"

const AdminActions = ({ blog, blogs, setBlogs }) => {
    const [deletingBlog, setDeletingBlog] = useState(false)

    const deletePost = async (id) => {
        let blogData = { blogId: id }
        setDeletingBlog(true)
        try {
            await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "blog/delete", blogData, requestConfig)
            setDeletingBlog(false)
        } catch (e) {
            console.log(e)
            setDeletingBlog(false)
        }
        const filteredBlogs = blogs.filter(b => b._id !== blog._id)
        setBlogs(filteredBlogs)
    }
    return (
        <div className={styles.admin_card_links}>
            <div className={styles.actions_button_group}>
                {/* <Image src={addIcon} width={20} height={20} alt={blog?.title} /> */}
                <motion.button whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                }} onClick={() => deletePost(blog?._id)}>{deletingBlog ? "Loading" : "Delete"}</motion.button>
                {/* <motion.button whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                }}>Update</motion.button> */}
            </div>
        </div>
    )
}

export default AdminActions
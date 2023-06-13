import Image from "next/image"
import styles from "../styles/components.module.css"
import addIcon from "../images/add_icon.png"
import { motion } from "framer-motion"
import { useState } from "react"
import BlogCard from "./BlogCard"

const ArchiveBlogCard = ({ blog }) => {
    const [showBlog, setShowBlog] = useState(false)
    return (
        <motion.div
            className={styles.archive_card_container}
        >
            <div className={styles.archive_card}>
                <div className={styles.archive_card_image_part}>
                    <Image src={blog.image} width={180} height={120} alt={blog?.title} />
                </div>
                <div className={styles.card_content_part}>
                    <h4>{blog?.title?.substring(0, 20)}</h4>
                    <p>{blog?.body?.substring(0, 80) + "...."}</p>
                    <div className={styles.add_icon_div} onClick={() => setShowBlog(!showBlog)}>
                        <div className={styles.add_icon}>
                            <Image src={addIcon} width={20} height={20} alt={blog?.title} />
                        </div>
                    </div>
                </div>
            </div>
            {showBlog &&
                <div className={styles.main_blog_container}>
                    <div className={styles.hide_blog_bar}>
                        <button onClick={() => setShowBlog(!showBlog)}>Hide Blog</button>
                    </div>
                    <BlogCard blog={blog} />
                </div>
            }
        </motion.div>
    )
}

export default ArchiveBlogCard
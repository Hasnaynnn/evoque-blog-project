import dynamic from "next/dynamic"
const BlogCard = dynamic(() => import("@/src/components/BlogCard"))
import CustomHead from "@/src/components/Head"
import styles from "@/src/styles/blog.module.css"
import AdsBar from "@/src/components/AdsBar"


const Blog = ({ blog }) => {
    return (
        <>
            <CustomHead
                title="JBLOG | blog"
                description={blog[0]?.title}
                keyword="science blogs, food blogs"
            />
            <div className={styles.single_article_page}>
                <div className={styles.blogs_section}>
                    <BlogCard blog={blog} />
                </div>
                <div className={styles.ads_bar}>
                    <div className={styles.ads_bar_content}>
                        <AdsBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog


export async function getServerSideProps(context) {
    let { id } = context.query
    let url = process.env.NEXT_PUBLIC_BASE_URL + "blogs/" + id
    let res = await fetch(url)
    let blog = await res.json()

    return {
        props: {
            blog: blog.blog
        }
    }
}
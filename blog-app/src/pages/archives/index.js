import CustomHead from "@/src/components/Head"
import styles from "@/src/styles/blog.module.css"
import Navbar from "@/src/components/Navbar"
import { useEffect, useState } from "react"
import ArchiveBlogCard from "@/src/components/ArchiveBlog"
import categories from "@/src/utils/categories"


const Blog = ({ blogs }) => {
  const [category, setCategory] = useState("")

  useEffect(() => {
    console.log("category : " + category)
  
  }, [category])
  
  const matchCategory = (toMatch) => {
    let a = categories.filter(cat => {
      return cat.value.toLowerCase() === toMatch.toLowerCase()
    })
    return a.length > 0 ? true : false
  }
  return (
    <>
      <CustomHead
        title="JBLOG | archive blogs"
        description="see variety of blogs here"
        keyword="science blogs, food blogs"
      />
      {/* <Navbar /> */}
      <div className={styles.archive_blogs_part}>
        <div className={styles.filteration_bar}>
          <button onClick={() => setCategory("")} style={{ backgroundColor: category === "" && "gray" }} > All </button>
          {
            categories.map(cat => <button onClick={() => setCategory(cat.value)} style={{ backgroundColor: (category === cat.value) === true && "gray" }} > {cat.value} </button>)
          }
        </div>
        <div className={styles.archive_blogs_section}>
          {
            blogs.filter(b => b.category?.includes(category)).map((blog, index) => {
              console.log(blog.category)
              return <ArchiveBlogCard blog={blog} key={index} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Blog

export async function getServerSideProps() {
  let url = process.env.NEXT_PUBLIC_BASE_URL + "blogs/all"
  let res = await fetch(url)
  const blogs = await res.json()
  return {
    props: blogs
  }

}

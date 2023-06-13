import ArticlesBanner from "@/src/components/ArticlesBanner"
import Banner from "@/src/components/Banner"
import Button from "@/src/components/Button"
import CustomHead from "@/src/components/Head"
import Navbar from "@/src/components/Navbar"
import SubCategoriesBar from "@/src/components/SubCategoriesBar"
import styles from "@/src/styles/blog.module.css"
import requestConfig from "@/src/utils/config"
import axios from "axios"

const Physical = ({ blogs }) => {
  return (
    <>
      <CustomHead
        title="JBLOG | food blogs"
        description="see variety of blogs here"
        keyword="science blogs, food blogs"
      />
      <Navbar />
      {/* <div className={styles.blogs_section}>
        {
          blogs?.map((blog, index) => {
            return <TradingCard blog={blog} key={index} />
          })
        }
      </div> */}
      <SubCategoriesBar category="Physical" />
      <Banner blogs={blogs} />
      <ArticlesBanner blogs={blogs} />
    </>
  )
}

export default Physical

export async function getServerSideProps() {
  let url = process.env.NEXT_PUBLIC_BASE_URL + "blogs?category=Physical"
  let res = await axios.get(url, requestConfig)
  return {
    props: res.data
  }

}

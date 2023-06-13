import ArticlesBanner from "@/src/components/ArticlesBanner"
import Banner from "@/src/components/Banner"
import CustomHead from "@/src/components/Head"
import Navbar from "@/src/components/Navbar"
import SubCategoriesBar from "@/src/components/SubCategoriesBar"

const Science = ({ blogs }) => {
  return (
    <>
      <CustomHead
        title="JBLOG | science blog"
        description="see variety of blogs here"
        keyword="science blogs, food blogs"
      />
      <Navbar />
      <SubCategoriesBar category="Mental" />
      <Banner blogs={blogs} />
      <ArticlesBanner blogs={blogs} />
    </>
  )
}

export default Science

export async function getServerSideProps() {
  let url = process.env.NEXT_PUBLIC_BASE_URL + "blogs?category=Mental"
  let res = await fetch(url)
  const blogs = await res.json()
  return {
    props: blogs
  }
}

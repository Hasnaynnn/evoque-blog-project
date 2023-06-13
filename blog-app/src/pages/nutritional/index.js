import ArticlesBanner from "@/src/components/ArticlesBanner"
import Banner from "@/src/components/Banner"
import CustomHead from "@/src/components/Head"
import Navbar from "@/src/components/Navbar"
import SubCategoriesBar from "@/src/components/SubCategoriesBar"

import requestConfig from "@/src/utils/config"
import axios from "axios"

const Food = ({ blogs }) => {
  return (
    <>
      <CustomHead
        title="JBLOG | food blogs"
        description="see variety of blogs here"
        keyword="science blogs, food blogs"
      />
      <Navbar />
      <SubCategoriesBar category="Nutritional" />
      <Banner blogs={blogs} />
      <ArticlesBanner blogs={blogs} />
    </>
  )
}

export default Food

export async function getServerSideProps() {
  let url = process.env.NEXT_PUBLIC_BASE_URL + "blogs?category=Nutritional"
  let res = await axios.get(url, requestConfig)
  return {
    props: res.data
  }

}

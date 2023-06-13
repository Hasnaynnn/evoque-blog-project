import axios from "axios"

import "@/src/styles/home.module.css"

import CustomHead from "@/src/components/Head"
import Navbar from "@/src/components/Navbar"
import Banner from "@/src/components/Banner"
import ArticlesBanner from "@/src/components/ArticlesBanner"
import requestConfig from "@/src/utils/config"

export default function Home({blogs}) {
  return (
    <>
      <CustomHead
        title="JBLOG | home"
        description="see all science blogs here"
        keyword="science blogs, food blogs"
      />
      {/* <Logo /> */}
      <Navbar />
      <section>
        <Banner blogs={blogs} />
      </section>
      <ArticlesBanner blogs={blogs} />
    </>
  )
}

export async function getServerSideProps() {
  let url = process.env.NEXT_PUBLIC_BASE_URL + "blogs"
  let res = await axios.get(url, requestConfig)
  return {
    props: res.data
  }
}

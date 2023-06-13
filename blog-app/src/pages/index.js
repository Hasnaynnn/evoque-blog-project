import axios from "axios"
import CustomHead from "../components/Head"

import Navbar from "../components/Navbar"
import styles from "../styles/home.module.css"
import requestConfig from "../utils/config"
import FeaturedVideo from "../components/FeaturedVideo"
import FeaturedArticle from "../components/FeaturedArticle"

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
      <section className={styles.mission_banner}>
        <div>
          <h3 className={styles.mission_logo}>EVOQUE</h3>
        </div>
        <div>
          <h3>MISSION  STATEMENT  HERE</h3>
        </div>
      </section>
      <section>
        <FeaturedVideo blog={blogs[1]}  />
      </section>
      <section>
        <FeaturedArticle blog={blogs[0]} />
      </section>
    </>
  )
}

export async function getServerSideProps() {
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
  let url = process.env.NEXT_PUBLIC_BASE_URL + "blogs"
  let res = await axios.get(url, requestConfig)
  
  return {
    props: res.data
  }
  
}

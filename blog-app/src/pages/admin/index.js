import { withIronSessionSsr } from "iron-session/next";
import CustomHead from "@/src/components/Head"
import TradingCard from "@/src/components/TradingCard"
import requestConfig from "@/src/utils/config"
import axios from "axios"
import Link from "next/link"
import styles from "@/src/styles/blog.module.css"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Index = ({ user }) => {
  const [blogs, setBlogs] = useState([])

  // useEffect(() => {
  //   if (user === null) {
  //     window.location.replace("/login")
  //   }
  //   else console.log("you are admin")
  // }, [user]);

  useEffect(() => {
    fetchBlogs()
  }, [])

  async function fetchBlogs() {
    let url = process.env.NEXT_PUBLIC_BASE_URL + "blogs"
    try {
      let res = await axios.get(url, requestConfig)
      setBlogs(res?.data?.blogs)
    } catch (e) {
      console.log(e)
      console.log(e?.response?.data?.message)
      setBlogs(null)
    }
  }
  return (
    <>
      <motion.div initial={{ opacity: 0, scale: 0 }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ opacity: 1 }}
        animate={{
          opacity: 1,
          scale: 1,
          type: "keyframes",
          transition: {
            duration: 1,
            bounce: 1,
            delay: 0.1,
          },
        }
        } className={styles.admin_tabs_div}>
        <Link href="/admin/create">Create New post</Link>
      </motion.div>
      <CustomHead
        title="JBLOG | archive blogs"
        description="see variety of blogs here"
        keyword="science blogs, food blogs"
      />
      <div className={styles.blogs_section}>
        {
          blogs?.map((blog, index) => {
            return <TradingCard blog={blog} key={index} isAdmin={true} blogs={blogs} setBlogs={setBlogs} />
          })
        }
      </div>
    </>
  )
}

export default Index

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req?.session?.user || null
    if (user === null){
      return {
        props: {
          user: null
        }
      };
    }

    return {
      props: {
        user: req.session?.user,
      },
    };
  },
  {
    cookieName: "blog_app_session",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
);
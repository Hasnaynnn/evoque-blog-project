import React from 'react'
import homeStyles from "../styles/home.module.css"
import Image from 'next/image'
import Link from 'next/link'
const ArticleCard = ({blog, blogSize}) => {
  if (!blog) return null
  return (
    <div className= {blogSize === "main" ? homeStyles.main_article_card: blogSize === "medium"? homeStyles.medium_article_card : homeStyles.small_article_card}>
        <Link href={`/blogs/${blog?._id}`}>
        <h4>{blog?.title}</h4>
        <Image src={blog?.image} width={180} height={120} alt={blog?.title} className= {blogSize === "main" ? homeStyles.main_article_card_img: blogSize === "medium"? homeStyles.medium_article_card_img : homeStyles.small_article_card_img} />
        </Link>
    </div>
  )
}

export default ArticleCard
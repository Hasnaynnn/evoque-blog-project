import React from 'react'
import homeStyles from "../styles/home.module.css"
import ArticleCard from './ArticleCard'
const ArticlesBanner = ({blogs}) => {
    let blog = {
        title: "This is a blog",
        image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60"
    }
  return (
    <div className={homeStyles.articles_banner}>
        {blogs && blogs.slice(0, 3).map((blog, index) => (
            <ArticleCard blogSize="medium" blog = {blog} key={index}/>
        ))}
    </div>
  )
}

export default ArticlesBanner
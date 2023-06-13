import bannerStyles from "../styles/home.module.css"
import ArticleCard from "./ArticleCard"

const Banner = ({blogs}) => {
  return (
    <div className={bannerStyles.articles_cards}>
      <div className={bannerStyles.main_article}>
        {blogs && <ArticleCard blogSize="main" blog = {blogs[0]}/>}
      </div>
      <div className={bannerStyles.featured_articles}>
        {
          blogs && blogs.slice(1, 5).map((blog, index) => (
            <ArticleCard blogSize="small" blog = {blog} key={index}/>
          ))
        }
        {/* <ArticleCard blogSize="small" blog = {blog2}/>
        <ArticleCard blogSize="small" blog = {blog2}/>
        <ArticleCard blogSize="small" blog = {blog2}/>
        <ArticleCard blogSize="small" blog = {blog2}/> */}
      </div>
    </div>
  )
}

export default Banner
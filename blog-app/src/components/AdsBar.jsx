import React from 'react'
import blogStyles from "../styles/blog.module.css"
const AdsBar = () => {
  return (
    <div className={blogStyles.adbar_container}>
        <div className={blogStyles.adbar_box}>
            <h4>AdBar</h4>
        </div>
        <div className={blogStyles.adbar_box}>
            <h4>AdBar</h4>
        </div>
    </div>
  )
}

export default AdsBar
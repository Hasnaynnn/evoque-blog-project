import React from 'react'

import YoutubeView from "react-youtube"
import styles from "../styles/home.module.css"
const FeaturedVideo = ({ blog }) => {
    console.log(blog)
    return (
        <div className={styles.home_featured_video}>
            <div className={styles.home_featured_video_content}>
                <h2>{blog?.title?.substring(0, 23)}</h2>
                <div dangerouslySetInnerHTML={{ __html: blog?.body }} ></div>
            </div>
            <div className={styles.home_featured_video_video}>
                <YoutubeView videoId="hPpPEarBwHw" opts={{ height: "200", width: "320", playerVars: { autoplay: 1 } }} />
            </div>
        </div>
    )
}

export default FeaturedVideo
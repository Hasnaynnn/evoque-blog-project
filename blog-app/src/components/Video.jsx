import { motion } from 'framer-motion'
import Image from 'next/image'
//import vid from "/video.mp4"
import banner from "../images/food_picture.png"
import playIcon from "../images/video_icon.png"

import styles from "../styles/components.module.css"

const Video = () => {
    return (
        <motion.section
        >
            <div className={styles.video_banner}>
                <video src='/video.mp4' autoPlay loop muted className={styles.video} />
                {/* <Image src={banner} width={200} height={100} className={styles.video_banner_img} alt="blogs site" />
                <div className={styles.banner_play_icon}>
                    <Image src={playIcon} width={20} height={20} alt="blogs" />
                </div> */}
            </div>
        </motion.section>
    )
}

export default Video
import { motion } from 'framer-motion'
import React from 'react'
import styles from "../styles/components.module.css"

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, scale: 0 }}
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
            }
            className={styles.footer}>
            <div className={styles.footer_section}>
                <div className={styles.footer_logo_section}>
                    <h3>LOGO HERE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quis, deserunt fuga perspiciatis optio eum veritatis repudiandae a, voluptate mollitia nesciunt dolores, voluptas officia exc</p>
                </div>
                <div className={styles.footer_links_section}>
                    <div>
                        <h4>Links</h4>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Blog</p>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <p>Help Center</p>
                        <p>Job Location</p>
                        <p>Company Name</p>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <p>hello@company.com</p>
                        <p>JL. absysyysysy No. 193 Sukasari,<br /> Bandung West Java, Country name</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.footer_end}>
                <p>© {new Date().getFullYear()} Company name - All rights reserved.</p>
            </div>
        </motion.footer>
    )
}

export default Footer
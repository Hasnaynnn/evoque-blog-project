import React from 'react'
import { subCategories } from '../utils/categories'
import Link from 'next/link'
import styles from "../styles/blog.module.css"
const SubCategoriesBar = ({category}) => {
    let subCategoriesR = subCategories[category]
  return (
    <div className={styles.sub_categories_bar}>
    <div className={styles.sub_categories}>
        {
            subCategoriesR.map((subCategory, index) => {
                return <Link href = {`/articles/${category}/${subCategory?.value}`} key={index}>{subCategory.label}</Link>
            })
        }
    </div>
    </div>
  )
}

export default SubCategoriesBar
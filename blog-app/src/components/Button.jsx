import React from 'react'
import styles from "../styles/components.module.css"

const Button = ({name, onClick}) => {
  return (
    <button className = {styles.main_btn} onClick = {onClick}>{name}</button>
  )
}

export default Button
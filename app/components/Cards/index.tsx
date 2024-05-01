import React from 'react'
import styles from './Cards.module.css';
import Image from 'next/image';
const index = ({url="", iconColor="", ySize = "", title = "", description = "", bgColor = "", fgColor ="", borderW = "none", gap = "8px", img = "none"}) => {
  return (
    <div className={styles.card} style={{minHeight : ySize, backgroundColor : bgColor, color : fgColor, borderColor: fgColor, borderWidth: borderW, gap: gap}}>
      <div className={styles.icon_container}>
        <Image 
          className={styles.icon}
          src = {url}
          alt='Icon'
          width={25}
          height={25}
          style={{backgroundColor: iconColor}}
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <ul className={styles.users}>
        <li className={styles.usericon}>A</li>
        <li className={styles.usericon}>B</li>
        <li className={styles.usericon}>C</li>
        <li className={styles.usericon}>+5</li>
      </ul>
      <Image 
        className={styles.element}
        src = {"/element.png"}
        alt='Bg element'
        width={72}
        height={66}
        style={{display : img}}
      />
    </div>
  )
}

export default index
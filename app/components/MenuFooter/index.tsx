import React from 'react'
import styles from './MenuFooter.module.css';
import Image from 'next/image';
const index = () => {
  return (
    <div className={styles.menu_container}>
      <ul className={styles.menu}>
        <li className={styles.menuitem}>
          <Image
            src = {"Home.svg"}
            alt='Home'
            width={33}
            height={30.5}
            />
            <span>Home</span>
        </li>
        <li className={styles.menuitem}>
          <Image
              src = {"SpeechBubble.svg"}
              alt='FeedBack'
              width={33}
              height={30.5}
            />
            <span>Feedback</span>
        </li>
        <li className={styles.menuitem}>
          <Image
            src = {"Star.svg"}
            alt='Rate'
            width={33}
            height={30.5}
          />
          <span>Rate</span>
        </li>
      </ul>
    </div>
  )
}

export default index
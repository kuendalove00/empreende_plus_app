import React from 'react'
import styles from './MenuFooter.module.css';
import Image from 'next/image';
import Link from 'next/link';
const index = () => {
  return (
    <div className={styles.menu_container}>
      <ul className={styles.menu}>
        <li>
        <Link href={"/"} className={styles.menuitem}>
          <Image
            src = {"../icons/Home.svg"}
            alt='Home'
            width={33}
            height={30.5}
            />
            <span>Home</span>
        </Link>
        </li>
        <li >
        <Link href={"/"} className={styles.menuitem}>
          <Image
              src = {"../icons/SpeechBubble.svg"}
              alt='FeedBack'
              width={33}
              height={30.5}
              />
            <span>Feedback</span>
        </Link>
        </li>
        <li >
        <Link href={"/"} className={styles.menuitem}>
          <Image
            src = {"../icons/Star.svg"}
            alt='Rate'
            width={33}
            height={30.5}
            />
          <span>Rate</span>
      </Link>
        </li>
      </ul>
    </div>
  )
}

export default index
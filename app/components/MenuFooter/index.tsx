import React from "react";
import styles from "./MenuFooter.module.css";
import Image from "next/image";
import Link from "next/link";
const MenuFooter = () => {
  return (
    <div className={styles.menu_container}>
      <ul className={styles.menu}>
        <li>
          <Link href={"/home"} className={styles.menuitem}>
            <Image
              src={"../icons/Home.svg"}
              alt="Home"
              width={40}
              height={30.5}
            />
            <span>Início</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className={styles.menuitem}>
            <Image
              src={"../icons/SpeechBubble.svg"}
              alt="FeedBack"
              width={40}
              height={30.5}
            />
            <span>Feedback</span>
          </Link>
        </li>
        <li>
          <Link href={"/"} className={styles.menuitem}>
            <Image
              src={"../icons/Star.svg"}
              alt="Rate"
              width={40}
              height={30.5}
            />
            <span>Score</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuFooter;

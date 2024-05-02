/* import { Link } from "react-router-dom"; */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles  from "./NavBar.module.css";
import Image from "next/image";

export const NavBar = () => {
 // Check if it's mobile view on mount and on window resize
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
            <Image
             src={"logo.svg"}
             width={113}
             height={20}
             alt="Spacium Logo"
             />
        </div>
        <div className={styles.menu}>
          <div className={styles.user}>
            <span>F</span>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

import React from "react";
import splash from "./splash.module.css";
import headerImg from "../../../../public/eff_01.svg";
import logo from "../../../../public/logo.svg";
import footerImg from "../../../../public/eff_02.svg";
import Image from "next/image";

export function Header() {
  return (
    <>
      <header className={splash.header}>
        <Image src={headerImg} alt="" width={120} />
      </header>
    </>
  );
}

export function Body() {
  return (
    <>
      <div className={splash.container}>
        <Image src={logo} alt="" width={250} />
        <div className={splash.txt_name}>
          <p>
            <span className={splash.gold}>Quiz |</span>{" "}
            <span className={splash.green}>empreende+</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer className={splash.footer}>
        <Image src={footerImg} alt="" width={120} />
      </footer>
    </>
  );
}

export function Components() {
  return (
    <>
      <div className={splash.father}>
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

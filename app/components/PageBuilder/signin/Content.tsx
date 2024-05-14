import React, { useState } from "react";
import signin from "./signin.module.css";
import logo from "../../../../public/logo_green.svg";
import bottom from "../../../../public/signin/bottom.svg";
import Link from "next/link";
import Image from "next/image";
// import

export function Content() {
  return (
    <>
      <div className={signin.container}>
        <div className={signin.content}>
          <Header />
          <Name />
          <Greatings />
        </div>
        <Form />
        <Footer />
      </div>
    </>
  );
}

export function Header() {
  return (
    <>
      <div className={signin.header}>
        <div className={signin.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={signin.slogan}>
          <p>
            <span className={signin.dark_gold}>Quiz |</span>{" "}
            <span className={signin.green}>empreende</span> +
          </p>
        </div>
      </div>
    </>
  );
}

export function Name() {
  return (
    <>
      <div className={signin.name_container}>
        <div className={signin.ini_name}>
          <p>M</p>
        </div>
      </div>
    </>
  );
}

export function Greatings() {
  return (
    <>
      <div className={signin.great_container}>
        <h2 id={signin.title}>Antes de começarmos,</h2>
        <p>Precisaremos distinguí-lo na tabela de pontuação:</p>
      </div>
    </>
  );
}

export function Form() {
  return (
    <>
      <div className={signin.form_container}>
        <form action="">
          <input
            type="text"
            placeholder="Insira o seu nome"
            className={signin.inputName}
          />
          <Link href="/home" className={signin.Link}>
            <button type="button" className={signin.start}>
              Começar!
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <>
      <div className={signin.footer}>
        <Image src={bottom} alt="bottom" />
      </div>
    </>
  );
}

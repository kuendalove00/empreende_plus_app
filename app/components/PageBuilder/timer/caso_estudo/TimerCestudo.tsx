"use client";
import React from "react";
import { Header } from "@/app/components/Header/Header";
import MenuFooter from "@/app/components/MenuFooter";
import timer from "./timer.module.css";
import clock from "../../../../../public/icons/timer.svg"
import Image from "next/image";
import Link from "next/link";
import { time } from "console";

export default function TimerCestudo() {
  return (
    <>
      <div className={timer.container}>
        <Header nome={localStorage.getItem("nome")?.toString()} />
        <Content />
        <MenuFooter />
      </div>
    </>
  );
}

export function Content() {
  return (
    <>
      <div className={timer.text}>
        <h2>Caso de estudo</h2>
        <p className={timer.topic}>Produto físico, Publicidade e Marketing</p>
      </div>

      <div className={timer.popup_timer}>
        <div className={timer.clock}>
          <Image src={clock} width={75} alt="relógio" />
        </div>
        <div className={timer.text_in}>
          <p className={timer.txt_bold}>3 minutos</p>
          <small>Responda as questões antes dos 3 minutos excederem!</small>
          <p className={timer.green_text}>Boa sorte!</p>
        </div>
        <div className={timer.btn_success}>
          <Link className={timer.btn} href="/cestudo">Iniciar jogo!</Link>
        </div>
      </div>
    </>
  );
}

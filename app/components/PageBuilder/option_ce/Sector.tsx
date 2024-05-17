"use client";
import React from "react";
import sector from "./sector.module.css";
import { Header } from "../../Header/Header";
import Link from "next/link";

export function Sector() {
  return (
    <>
      <div className={sector.container}>
        <Header nome={localStorage.getItem("nome")?.toString()} />
        <Body />
        <Sectores />
      </div>
    </>
  );
}

export function Body() {

  return (
    <>
      <div className={sector.info}>
        <div className={sector.text}>
          <p id={sector.title}>Caso de estudo</p>
          <div className={sector.inf}>
            <p>
              <span className={sector.dark_gold}>Escolha um sector</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const Sectores: React.FC = () => {

  return (
    <>
      <div className={sector.container_sec}>
        <div className={sector.first}>
          <Link href="/timer/caso_estudo">
            <div
             className={`${sector.options} ${sector.op_1}`}>
              <p>Agricultura</p>
            </div>
          </Link>
          <Link href="timer/caso_estudo">
            <div className={`${sector.options} ${sector.op_2}`}>
              <p>Educação</p>
            </div>
          </Link>
        </div>
        <div className={sector.second}>
          <Link href="timer/caso_estudo">
            <div className={`${sector.options} ${sector.op_1}`}>
              <p>
                Saúde
              </p>
            </div>
          </Link>
          <Link href="timer/caso_estudo">
            <div className={`${sector.options} ${sector.op_2}`}>
              <p>Finanças</p>
            </div>
          </Link>
        </div>
        
      </div>
    </>
  );
};

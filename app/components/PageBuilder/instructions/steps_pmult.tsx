import React from "react";
import pmultiplas from "./steps_pmult.module.css";

import Link from "next/link";

import { Header } from "../../Header/Header";
import MenuFooter from "../../MenuFooter";

export function Steps_pmult() {
  return (
    <>
      <div className={pmultiplas.container}>
        <Header nome={localStorage.getItem("nome")?.toString()} />
        <Info />
        <Steps />
        <MenuFooter />
      </div>
    </>
  );
}

export function Info() {
  return (
    <>
      <div className={pmultiplas.info}>
        <div className={pmultiplas.text}>
          <p id={pmultiplas.title}>Perguntas Múltiplas</p>
          <div className={pmultiplas.inf}>
            <p>
              <span className={pmultiplas.dark_gold}>Responda às perguntas</span>
              <span className={pmultiplas.green}>
                {" "}
                e teste o seu conhecimento
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Steps() {
  return (
    <>
      <div className={pmultiplas.steps_section}>
        <h2 id={pmultiplas.title}>Como jogar:</h2>
        <div className={`${pmultiplas.steps} ${pmultiplas.step_1}`}>
          <div className={`${pmultiplas.number} ${pmultiplas.number_1}`}>1</div>
          <div className={`${pmultiplas.text_step}`}>
            <p>
              Responda perguntas relacionadas a empreendedorismo e startups, e teste o seu conhecimento.
            </p>
          </div>
        </div>
        
      </div>
      <div className={pmultiplas.button}>
        <Link href="/pmultiplas" className={pmultiplas.Link}>
          <button type="button" className={pmultiplas.start}>
            Jogar agora
          </button>
        </Link>
      </div>
    </>
  );
}

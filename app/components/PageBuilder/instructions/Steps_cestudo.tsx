import React from "react";
import cestudo from "./steps_ce.module.css";

import Link from "next/link";

import { Header } from "../../Header/Header";

export function Conteudo() {
  return (
    <>
      <div className={cestudo.container}>
        <Header />
        <Info />
        <Steps />
      </div>
    </>
  );
}



export function Info() {
  return (
    <>
      <div className={cestudo.info}>
        <div className={cestudo.text}>
          <p id={cestudo.title}>Caso de estudo</p>
          <div className={cestudo.inf}>
            <p>
              <span className={cestudo.dark_gold}>Escolha um sector</span>
              <span className={cestudo.green}>
                {" "}
                e enfrente o desafio empresarial
              </span>
            </p>
          </div>
          <div className={cestudo.small_txt}>
            <small>
              Responda perguntas e construa um negócio no sector selecionado.
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export function Steps() {
  return (
    <>
      <div className={cestudo.steps_section}>
        <h2 id={cestudo.title}>Como jogar:</h2>
        <div className={`${cestudo.steps} ${cestudo.step_1}`}>
          <div className={`${cestudo.number} ${cestudo.number_1}`}>1</div>
          <div className={`${cestudo.text_step}`}>
            Escolha uma categoria e um sector empresarial entre as opções
            fornecidas.
          </div>
        </div>
        <div className={`${cestudo.steps} ${cestudo.step_2}`}>
          <div className={`${cestudo.number} ${cestudo.number_2}`}>2</div>
          <div className={`${cestudo.text_step}`}>
            Leia o caso de estudo cuidadosamente.
          </div>
        </div>
        <div className={`${cestudo.steps} ${cestudo.step_3}`}>
          <div className={`${cestudo.number} ${cestudo.number_3}`}>3</div>
          <div className={`${cestudo.text_step}`}>
            Responda uma série de perguntas relacionadas ao sector escolhido.
          </div>
        </div>
        <div className={`${cestudo.steps} ${cestudo.step_4}`}>
          <div className={`${cestudo.number} ${cestudo.number_4}`}>4</div>
          <div className={`${cestudo.text_step}`}>
            Ao final, as suas respostas serão avaliadas com base na
            originalidade, viabilidade e eficácia.
          </div>
        </div>
      </div>
      <div className={cestudo.button}>
        <Link href="/quiz" className={cestudo.Link}>
          <button type="button" className={cestudo.start}>
            Jogar agora
          </button>
        </Link>
      </div>
    </>
  );
}

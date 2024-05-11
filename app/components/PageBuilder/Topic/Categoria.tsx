import React from "react";
import { Header } from "../../Header/Header";
import categoria from "./categorias.module.css";
import Link from "next/link";

export default function Categoria() {
  return (
    <>
      <div className={categoria.container}>
        <Header />
        <Body />
      </div>
    </>
  );
}

export function Body() {
  return (
    <>
      <div className={categoria.texto}>
        <p className={categoria.title}>Caso de estudo</p>
        <h2 className={categoria.dark_gold}>Escolha uma categoria</h2>
      </div>

      <div className={categoria.options}>
        <Link href={'/instruction'}>
        <button className={`${categoria.btn} ${categoria.btn_light_green}`}>
          Produto físico
        </button>
        </Link>
        <Link href={'/instruction'}>
        <button className={`${categoria.btn} ${categoria.btn_gold}`}>
          Prestação de serviço
        </button>
        </Link>
        <Link href={'/instruction'}>
        <button className={`${categoria.btn} ${categoria.btn_green}`}>
          Software
        </button>
        </Link>
      </div>
    </>
  );
}

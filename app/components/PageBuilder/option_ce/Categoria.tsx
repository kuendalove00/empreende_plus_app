import React from "react";
import { Header } from "../../Header/Header";
import categoria from "./categorias.module.css";
import MenuFooter from "../../MenuFooter";
import Link from "next/link";


export default function Categoria() {
  return (
    <>
      <div className={categoria.container}>
        <Header nome={localStorage.getItem("nome")?.toString()} />
        <div className={categoria.center}>
          <Body />
        </div>
        <MenuFooter />
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
        <Link href={"/sectores"} className={categoria.Link}>
          <button 
          
          className={`${categoria.btn} ${categoria.btn_light_green}`}>
            Produto físico
          </button>
        </Link>
        <Link href={"/sectores"} className={categoria.Link}>
          <button
         
           className={`${categoria.btn} ${categoria.btn_gold}`}>
            Prestação de serviço
          </button>
        </Link>
        <Link href={"/sectores"} className={categoria.Link}>
          <button
         
          className={`${categoria.btn} ${categoria.btn_green}`}>
            Software
          </button>
        </Link>
      </div>
    </>
  );
}

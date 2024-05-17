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
  const { setFormValue } = useForm({
    initalState: {categoria: "", sector: ""},
  });
  
  return (
    <>
      <div className={categoria.texto}>
        <p className={categoria.title}>Cas de estudo</p>
        <h2 className={categoria.dark_gold}>Escolha uma categoria</h2>
      </div>

      <div className={categoria.options}>
        <Link href={'/instruction'}>
        <button 
        value="1"
        onClick={
          (e) => setFormValue({ categoria: e.target.value })
        } 
        className={`${categoria.btn} ${categoria.btn_light_green}`}>
          Produto físico
        </button>
        </Link>
        <Link href={'/instruction'}>
        <button 
        value="2"
        onClick={
          (e) => setFormValue({ categoria: e.target.value })
        } 
        className={`${categoria.btn} ${categoria.btn_gold}`}>
          Prestação de serviço
        </button>
        </Link>
        <Link href={'/instruction'}>
        <button
        value="3"
        onClick={
          (e) => setFormValue({ categoria: e.target.value })
        } 
        className={`${categoria.btn} ${categoria.btn_green}`}>
          Software
        </button>
        </Link>
      </div>
    </>
  );
}

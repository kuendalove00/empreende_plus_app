"use client";
import { useEffect } from "react";
import { Header } from "../../Header/Header";
import scoreboard from "./scoreboard.module.css";
import MenuFooter from "../../MenuFooter";
import Link from "next/link";
import { service } from "@/services";
import { responseStatus } from "../../../../utils/responseStatus";


export function Scoreboard() {
  return (
    <>
      <div className={scoreboard.container}>
        <Header nome={localStorage.getItem("nome")?.toString()} />
        <div className={scoreboard.center}>
          <Body />
        </div>
        <MenuFooter />
      </div>
    </>
  );
}


export function Body() {

  const pontuacoes = [];

  const getScores = async () => {
    const resposta = await service.pontuacao.listar();
    alert(JSON.stringify(resposta?.data));
    if (responseStatus.OK === resposta.status) {
      const pontuacoes = resposta.data;
    }
  };
  
  useEffect(() => {
    getScores();
  }, [])

  return (
    <>
      <div className={scoreboard.texto}>
        <h2 className={scoreboard.dark_gold}>Tabela de Pontuações</h2>
      </div>
      
      {pontuacoes?.forEach(element => {
        return (<div className={scoreboard.options}>
        <Link href={"/sectores"} className={scoreboard.Link}>
          <div 
          className={`${scoreboard.btn} ${scoreboard.btn_light_green}`}>
            {element?.pontos}
          </div>
        </Link>
      </div>)
      })}
    </>
  );
}

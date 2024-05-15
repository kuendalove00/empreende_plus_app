"use client";
import { useRouter, useSearchParams } from "next/navigation";
import scoree from "./score.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import polygon1 from "../../public/polygon/Polygon 1.svg";
import polygon2 from "../../public/polygon/Polygon 2.svg";
import polygon3 from "../../public/polygon/Polygon 3.svg";
import polygon4 from "../../public/polygon/Polygon 4.svg";
import pointer from "../../public/polygon/pointer.svg";

const ScorePage: React.FC = () => {
  const score = useSearchParams().get("score");

  return (
    <div className={scoree.container}>
      <div className={scoree.inner}>
        <div className={scoree.text}>
          <h3 className={scoree.fimjogo}>Fim do jogo!</h3>
          <h2 className={scoree.congrat}>
            <span className={scoree.green}>Par</span>ab
            <span className={scoree.gold}>éns!!</span>
          </h2>
          <p>Você conseguiu pontos suficientes para ganhar um prêmio!</p>
          <h1 className={scoree.ptc}>{score} pts</h1>
        </div>
        <div className={scoree.roleta}>
          <Roleta />
        </div>
        <div className={scoree.bottom_txt}>
          <p>
            Preparado(a)? Gire a roleta e deixe a sorte decidir o que você vai
            levar para casa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;

export function Roleta() {
  return (
    <>
      <div className={scoree.roletaInner}>
        <div className={scoree.roletaInner_2}>
          <div className={scoree.polygon}>
            <div className={scoree.polygon_1}>
              <Image src={polygon1} width={150} alt="Polygon" />
              <Image src={polygon3} width={150} alt="Polygon" />
            </div>
            <div className={scoree.polygon_2}>
              <Image src={polygon4} width={170} alt="Polygon" />
              <Image src={polygon2} width={199} alt="Polygon" />
              <div className={scoree.btn}>
                <Image src={pointer} width={30} alt="Polygon" />
                <Link href={"/premio"} className={scoree.btn_1}>Girar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

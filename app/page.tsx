'use client';
import Image from "next/image";
import { NavBar } from "./components/Navbar";
import Cards from "./components/Cards";
import styles from "./page.module.css";
import MenuFooter from "./components/MenuFooter";
export default function Home() {
  return (
    <div className={styles.screen}>
      <NavBar/>
    <main className={styles.container}>
      <section className={styles.welcome}>
        <h3 className={styles.welcome_title}>Olá, Francisca Tungumuna</h3>
        <p className={styles.welcome_description}>Teste as suas habilidades. Escolha o seu desafio!</p>
        <span className={styles.hastag}>#StartupSummit2024</span>
      </section>
      <section className={styles.cards_container}>
        <div className={styles.rowcard}>
          <Cards 
            url={"/Puzzle.svg"}
            iconColor = {"#5CB0A9"}
            ySize={"340px"} 
            title={"Caso de Estudo"} 
            description={"Soluções criativas para desafios reais"}
            bgColor={"#305350"}
            fgColor={"whitesmoke"} 
            gap="20px"
            img="block"
          />
        </div>
        <div className={styles.side_action}>
          <Cards 
          url={"/LightOn.svg"}
          iconColor = {"#D2A340"}
          ySize={"50%"} 
          title={"Perguntas Múltiplas"} 
          bgColor={"#FFEAB9"}
          fgColor={"#D2A340"} 
          />
          <Cards 
          url={"/People.svg"}
          iconColor = {"#FFEAB9"}
          ySize={"50%"} 
          title={"Desafio Multiplayer"}
          bgColor={"#D2A340"}
          fgColor={"whitesmoke"} 
          />
        </div>
      </section>
      <section className={styles.others}>
        <h1>Outros</h1>
        <button className={styles.fullbtn}>
          <Image 
            src={"Warranty.svg"}
            alt="Warranty"
            width={48}
            height={48} 
          / >
          Visualizar prêmios disponíveis
          </button>
      </section>
    </main>
      <MenuFooter/>
    </div>
  );
}

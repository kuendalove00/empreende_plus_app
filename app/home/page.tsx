"use client";
import Image from "next/image";
import { NavBar } from "../components/Navbar/NavBar";
import Cards from "../components/Cards";
import styles from "./page.module.css";
import MenuFooter from "../components/MenuFooter";
import Link from "next/link";
const Home = () => {
  return (
    <div className={styles.screen}>
      <NavBar nome={localStorage.getItem("nome")?.toString()} />
      <main className={styles.container}>
        <section className={styles.welcome}>
          <h3 className={styles.welcome_title}>Olá, {localStorage.getItem("nome")}</h3>
          <p className={styles.welcome_description}>
            Teste as suas habilidades. Escolha o seu desafio!
          </p>
          <span className={styles.hastag}>#StartupSummit2024</span>
        </section>
        <section className={styles.cards_container}>
          <div className={styles.rowcard}>
            <Link href={"/instruction_cest"}>
              <Cards
                url={"../icons/Puzzle.svg"}
                iconColor={"var(--secondary-green-light)"}
                ySize={"345px"}
                title={"Caso de Estudo"}
                description={"Soluções criativas para desafios reais"}
                bgColor={"#305350"}
                fgColor={"whitesmoke"}
                gap="20px"
                img="block"
              />
            </Link>
          </div>
          <div className={styles.side_action}>
            <Link href={"../instruction"}>
              <Cards
                url={"../icons/LightOn.svg"}
                iconColor={"var(--secondary-yellow)"}
                ySize={"350px"}
                title={"Perguntas Múltiplas"}
                description={"Teste o seu conhecimento"}
                bgColor={"#FFEAB9"}
                fgColor={"var(--secondary-yellow)"}
              />
            </Link>
            
          </div>
        </section>
        <section className={styles.others}>
          <h1>Outros</h1>
          <button className={styles.fullbtn}>
            <Image
              src={"../icons/Warranty.svg"}
              alt="Warranty"
              width={48}
              height={48}
            />
            Visualizar prêmios disponíveis
          </button>
        </section>
      </main>
      <MenuFooter />
    </div>
  );
};
export default Home;

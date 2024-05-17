import logo from "../../../public/logo.svg";
import icon from "../../../public/icons/back.svg";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import style from "./header.module.css";

export function Header({nome=""}) {
  const colorScheme = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <header className={style.header}>
      <div className={style.top}>
        <div className={style.icon}>
          <Image
            className={colorScheme ? style.light_mode : ""}
            src={icon}
            alt=""
            width={100}
          />
        </div>
        <div className={style.logo}>
          <Image src={logo} alt="" width={115} />
        </div>
        <div className={style.name}>
          <div className={style.ini_name}>{nome? nome.charAt(0) : "S"}</div>
        </div>
      </div>
    </header>
  );
}

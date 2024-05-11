import logo from "../../../public/logo.svg";
import icon from "../../../public/icons/back.svg";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";
import style from "./style.module.css";
export function Header() {
  const colorScheme = useMediaQuery('(prefers-color-scheme: dark)');
  return (
      <header className={style.header}>
        <div className={style.top}>
          <div className={style.icon}>
            <Image className={colorScheme ? style.light_mode : ''} src={icon} alt="" width={100}/>
          </div>
          <div className={style.logo}>
            <Image src={logo} alt="" width={100}/>
          </div>
          <div className={style.name}>
            <div className={style.ini_name}>M</div>
          </div>
        </div>
      </header>
  );
}
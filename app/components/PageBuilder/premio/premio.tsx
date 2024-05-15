import React from "react";
import premio from "./premio.module.css";
import Image from "next/image";
import present from "../../../../public/present.png";
import MenuFooter from "../../MenuFooter";

export function Premio() {
  return (
    <div className={premio.container}>
      <div className={premio.inner}>
        <div className={premio.txt}>
          <h1>
            <span className={premio.green}>Par</span>ab
            <span className={premio.gold}>éns!!</span>
          </h1>
          <p>O seu prêmio:</p>
        </div>
        <div className={premio.popup_p}>
          <div className={premio.in}>
            <div className={premio.img}>
              <Image
                className={premio.img}
                src={present}
                width={340}
                height={320}
                alt=""
              />
            </div>
            <div className={premio.text}>
              <p>
                <span className={premio.gold}>Kit 01: </span>
                <span className={premio.green}>1 agenda + 1 T-shirt</span>
              </p>
            </div>
          </div>
        </div>
        <MenuFooter />
      </div>
    </div>
  );
}

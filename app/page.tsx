"use client";
import React, { useEffect } from "react";
import { Components } from "./components/PageBuilder/splash_screen/Content";

const SplashScreen = () => {
  useEffect(() => {
    // Espera 3 segundos e redireciona para outra rota
    const timer = setTimeout(() => {
      window.location.href = "/welcome"; // Redireciona para a outra rota após 3 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timeout se o componente for desmontado antes dos 3 segundos
  }, []);

  return (
    <>
      <Components />
    </>
  );
};
export default SplashScreen;

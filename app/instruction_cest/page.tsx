"use client";
import React from "react";
import { Steps_cest } from "../components/PageBuilder/instructions/Steps_cestudo";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

const Instrucoes = () => {

    return (
      <div>
        <Steps_cest/>
      </div>
    );
  };
export default Instrucoes;

import React, { useState } from "react";
import check from "./check.module.css";
import logo from "../../../../public/logo_green.svg";
import bottom from "../../../../public/signin/bottom.svg";
import Link from "next/link";
import Image from "next/image";
import { service } from "../../../../services"
import { useForm } from "react-hook-form";
import { responseStatus } from "../../../../utils/responseStatus";
// import

export function Content() {
  return (
    <>
      <div className={check.container}>
        <div className={check.content}>
          <Header />
          <Name />
          <Greatings />
        </div>
        <Form />
        <Footer />
      </div>
    </>
  );
}

export function Header() {
  return (
    <>
      <div className={check.header}>
        <div className={check.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <div className={check.slogan}>
          <p>
            <span className={check.dark_gold}>Quiz |</span>{" "}
            <span className={check.green}>empreende</span> +
          </p>
        </div>
      </div>
    </>
  );
}

export function Name() {
  return (
    <>
      <div className={check.name_container}>
        <div className={check.ini_name}>
          <p>S</p>
        </div>
      </div>
    </>
  );
}

export function Greatings() {
  return (
    <>
      <div className={check.great_container}>
        <h2 id={check.title}>Antes de começarmos,</h2>
        <p>Precisaremos distinguí-lo na tabela de pontuação:</p>
      </div>
    </>
  );
}

export function Form() {

  const { register, handleSubmit, setValue, errors } = useForm({});

  const onSubmit = async (data) => {

    const dados = {...data}; 

    const resposta = await service.usuario.verificar(dados);

    if (responseStatus.OK === resposta.status) {
      localStorage.setItem("nome", data?.nome);
      window.location.href = '/home';
    }else{
      alert("Registo não encontrado");
    }
    
};

  return (
    <>
      <div className={check.form_container}>
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Insira o seu nome"
            className={check.inputName}
            onInput={(event) => {
              setValue("nome", event.target.value);
          }}
          id="nome" name="nome" required={true}  {...register("nome", { required: true })}
          />

            <button type="submit" className={check.start}>
              Verificar!
            </button>
          <Link href="/signin" className={check.Link}>
              Criar Conta!            
          </Link>
        </form>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <>
      <div className={check.footer}>
        <Image src={bottom} alt="bottom" />
      </div>
    </>
  );
}

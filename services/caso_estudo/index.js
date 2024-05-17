import React from 'react'
import { axiosInstance } from "../../api/axios";


async function registar(data = {})
{
    try{
        const response = await axiosInstance.post("/caso-estudo", data);
        return response;
    }catch(error)
    {
        return error.response;
    }
}


async function opcoes(filter = {
    categoria: "2",
    sector: "3"
  })
{
    try{
        const queryParams = new URLSearchParams(filter);
        alert("Query: "+queryParams);
        const response = await axiosInstance.get(`/caso-estudo/opcoes?${queryParams}`);
        alert("Resposta: "+JSON.stringify(response.data));
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function listar()
{
    try{
        const response = await axiosInstance.get("/caso-estudo");
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function detalhar(data = {})
{
    try{
        const response = await axiosInstance.get(`/caso-estudo/${data.id}`);
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function atualizar(data={})
{
    try{
        const response = await axiosInstance.patch(`/caso-estudo/${data.id}`,
            data
        );
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function excluir(data={})
{
    try{
        const response = await axiosInstance.get(`/caso-estudo/${data.id}`);
        return response;
    }catch(error)
    {
        return error.response;
    }
}


export const caso_estudo = {registar, listar, opcoes, detalhar, atualizar, excluir}

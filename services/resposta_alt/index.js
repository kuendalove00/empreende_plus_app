import React from 'react'
import { axiosInstance } from "../../api/axios";


async function registar(data = {})
{
    try{
        const response = await axiosInstance.post("/resposta-alt", data);
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function listar()
{
    try{
        const response = await axiosInstance.get("/resposta-alt");
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function detalhar(data = {})
{
    try{
        const response = await axiosInstance.get(`/resposta-alt/${data.id}`);
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function atualizar(data={})
{
    try{
        const response = await axiosInstance.patch(`/resposta-alt/${data.id}`,
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
        const response = await axiosInstance.get(`/resposta-alt/${data.id}`);
        return response;
    }catch(error)
    {
        return error.response;
    }
}


export const resposta_alt = {registar, listar, detalhar, atualizar, excluir}

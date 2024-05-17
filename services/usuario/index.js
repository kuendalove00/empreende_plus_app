import React from 'react'
import { axiosInstance } from "../../api/axios";

async function registar(data = {})
{
    try{
        alert(JSON.stringify(data));
        const response = await axiosInstance.post("/usuario", data);
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function verificar(data = {})
{
    try{
        const response = await axiosInstance.get(`/usuario/verificar/${data.id}`);
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function listar()
{
    try{
        const response = await axiosInstance.get("/usuario");
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function detalhar(data = {})
{
    try{
        const response = await axiosInstance.get(`/usuario/${data.id}`);
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function atualizar(data={})
{
    try{
        const response = await axiosInstance.patch(`/usuario/${data.id}`,
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
        const response = await axiosInstance.get(`/usuario/${data.id}`);
        return response;
    }catch(error)
    {
        return error.response;
    }
}


export const usuario = {registar, listar, verificar, detalhar, atualizar, excluir}

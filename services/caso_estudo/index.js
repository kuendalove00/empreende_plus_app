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


export const caso_estudo = {registar, listar, detalhar, atualizar, excluir}

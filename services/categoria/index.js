import React from 'react'
import { axiosInstance } from "../../api/axios";


async function registar(data = {})
{
    try{
        const response = await axiosInstance.post("/categoria", data);
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function listar()
{
    try{
        const response = await axiosInstance.get("/categoria");
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function detalhar(data = {})
{
    try{
        const response = await axiosInstance.get(`/categoria/${data.id}`);
        return response;
    }catch(error)
    {
        return error.response;
    }
}

async function atualizar(data={})
{
    try{
        const response = await axiosInstance.patch(`/categoria/${data.id}`,
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
        const response = await axiosInstance.get(`/categoria/${data.id}`);
        return response;
    }catch(error)
    {
        return error.response;
    }
}


export const categoria = {registar, listar, detalhar, atualizar, excluir}

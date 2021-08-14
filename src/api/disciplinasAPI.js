import axios from "axios";

export function listarDisciplinas(token){
    return axios({
        method: "GET",
        url: "http://localhost:8393/api/post",
        headers:{
            "token": token,
        },
    })
}

export function inserirDisciplina(post, token){
    return axios({
        method: "POST",
        url: "http://localhost:8393/api/posts",
        headers:{
            "token": token,
        },
        data: post,
    })
}

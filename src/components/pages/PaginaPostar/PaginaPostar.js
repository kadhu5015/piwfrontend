import { Navegador } from "../../common/Navegador/Navegador"
//import history from '../../../history';
import { inserirDisciplina } from "../../../api/disciplinasAPI";
import { AuthContext } from "../../../App";
import {useContext, useState} from 'react';
import {useForm} from "react-hook-form";

function FormPostar(){
    
    const {auth} = useContext(AuthContext);
    console.log("antes");
    const {register, handleSubmit} = useForm();
    console.log("depois");
    const submeter = (post)=>{
        console.log("post:");
        console.log(post);
        inserirDisciplina(post, auth.token).then((response)=>{
            console.log(response);
            
        })
        .catch((error)=>{console.log(error);})
    
    }; //eh aqui que faço o babado do axios

    return(
        <form onSubmit={handleSubmit(submeter)}>
            Texto:<input type="text" name="texto" {...register("texto")}></input> <br></br>
            Likes: <input type="text" name="matricula" {...register("likes")}></input><br></br>
            <button>Cadastrar</button>
        </form>
    )
}

export function PaginaPostar(){
    return (
        <div className="container">
            <Navegador></Navegador>
            <FormPostar></FormPostar>
        </div>
    )
}


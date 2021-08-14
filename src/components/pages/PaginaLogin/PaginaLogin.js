import { Navegador } from "../../common/Navegador/Navegador";
import { useForm } from 'react-hook-form';
import axios from "axios";
import {login} from "../../../api/auth";
import { useContext } from "react";
import { AuthContext } from "../../../App";
import history from "../../../history";
import "./PaginaLogin.css";

export function FormularioLogin(){

    const auth = useContext(AuthContext);
    console.log(auth);
    const {register, handleSubmit} = useForm();
    const submeter = (login_dados) => {
        login(login_dados).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome});
            history.push("/");
        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <form onSubmit={handleSubmit(submeter)}>
            Matricula: <input type="text" name="matricula"{...register("matricula")}></input><br/>
            Senha: <input type="password" name="senha"{...register("senha")}></input><br></br><br></br>
            <button>Logar</button>
        </form>
    )
}

export function Paginalogin(){
    return (
        <div className="container">
            <Navegador></Navegador>
            <h1>Fazer login:</h1>
            <FormularioLogin></FormularioLogin>

        </div>
    );
}
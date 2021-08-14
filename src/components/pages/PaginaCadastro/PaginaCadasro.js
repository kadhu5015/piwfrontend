import axios from "axios";
import { useForm } from "react-hook-form";
import history from "../../../history";
import { Navegador } from "../../common/Navegador/Navegador";
import {cadastrar} from "../../../api/auth"

function FormularioCadastro(){
    const {register, handleSubmit} = useForm();
    const submeter = (aluno)=>{

        cadastrar(aluno).then((response)=>{
            console.log(response);
            history.push("/login");
        })
        .catch((error)=>{console.log(error);})
    
    }; //eh aqui que faço o babado do axios
    
    return (
        <form onSubmit={handleSubmit(submeter)}>
            Nome:<input type="text" name="nome" {...register("nome")}></input> <br></br>
            Matricula: <input type="text" name="matricula" {...register("matricula")}></input><br></br>
            Senha: <input type="password" name="senha"{...register("senha")}></input><br></br><br></br>
            <button>Cadastrar</button>
        </form>
    )
}

export function PaginaCadastro(){
    return(
        <div className="container">
            <Navegador></Navegador>
            <h1>Cadastrar:</h1>
            <FormularioCadastro></FormularioCadastro>

        </div>
    );
}
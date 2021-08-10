import axios from "axios";
import { useForm } from "react-hook-form";
import history from "../../../history";
import { Navegador } from "../../common/Navegador/Navegador";


function FormularioCadastro(){
    const {register, handleSubmit} = useForm();
    const submeter = (aluno)=>{

        axios({
            method: "POST",
            url: "http://localhost:8393/api/usuarios",
            data: aluno,
        }).then((response)=>{
            console.log(response);
            history.push("/login");
        })
        .catch((error)=>{console.log(error);})
    
    }; //eh aqui que faço o babado do axios
    
    return (
        <form onSubmit={handleSubmit(submeter)}>
            Nome:<input type="text" name="nome" {...register("nome")}></input> <br></br>
            Matricula: <input type="text" name="matricula" {...register("matricula")}></input><br></br>
            Senha: <input type="password" name="senha"{...register("senha")}></input><br></br>
            <button>Cadastrar</button>
        </form>
    )
}

export function PaginaCadastro(){
    return(
        <div>
            <Navegador></Navegador>
            <h1>cadastro kerelhom</h1>
            <FormularioCadastro></FormularioCadastro>

        </div>
    );
}
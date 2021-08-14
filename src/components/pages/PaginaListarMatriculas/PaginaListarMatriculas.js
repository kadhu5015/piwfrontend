import { Navegador } from "../../common/Navegador/Navegador";
import { useForm } from 'react-hook-form';
import { useState, useContext } from "react";
import {inserirDisciplina} from '../../../api/disciplinasAPI';
import { AuthContext } from "../../../App";
import history from '../../../history';

function FormularioMatricula({onSubmeter}){
    const {auth} = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    const submeter = (auth, matricula) => {
        inserirDisciplina(matricula).then((response)=>{
            console.log(response);
            history.push("/");
        })
        .catch((error)=>{console.log(error);})
    }; //pode ter qualquer nome, nao so "submeter"
    return (
       
        <form onSubmit={handleSubmit(submeter)}>

            <label>
                Nome: 
                <input name="texto" type="text" {...register("texto")}/>
            </label>

            <label>
                Disciplina:
                <select name="disciplina"  id="" {...register("disciplina")}>
                    <option value="LMS">LMS</option>
                    <option value="PIW">PIW</option>
                    <option value="POO">POO</option>
                </select>
            </label>
            <input type="submit"></input>
        </form>
        ); 
}
function ListarMatriculas({matriculas}){
    return(
        <ul>
            {matriculas.map(
                (matricula)=>
                    (
                    <li>{matricula.nome} - {matricula.disciplina}</li>
                    )
                )};
        </ul>
    )
}
export function PaginaListarMatriculas(){
    const [matriculas,setMatriculas] = useState(
        [{
            nome:"ata",
            disciplina: "piw",
        },
        {
            nome: "outro",
            disciplina: "poo",
        }]
    );
    
    const adicionarMatricula = (matricula) =>{
        setMatriculas([...matriculas, matricula]); //os tres pontinhos significa que eu to copiando 
    }
    return(
        <div>
            
            <Navegador></Navegador>
            <h1>Ata</h1>
            <ListarMatriculas matriculas={matriculas}></ListarMatriculas>
            <FormularioMatricula onSubmeter={adicionarMatricula}></FormularioMatricula>
            
        </div>
    )
}
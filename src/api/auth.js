import axios from "axios";

export function login(login){
    return(
        axios({
            method:"POST",
            url:"http://localhost:8393/api/usuarios/signin",
            data: login,
        })
    )

}
export function cadastrar(aluno){
    return (
        axios({
            method: "POST",
            url: "http://localhost:8393/api/usuarios",
            data: aluno,
        })
    )
}
import "./Navegador.css";
import history from "../../../history";
import imagemtt from "./tt.jpg";
import {Link, NavLink} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../App";

function NavegadorLogado({nome}){
    const {setAuth} = useContext(AuthContext);
   
    return (
        <div className="navegador">

            <NavLink exact to='/'className="linhadotempo" alt="logo">Linha do tempo</NavLink>
            <NavLink exact to='/postar'className="postar">Postar</NavLink>
            <div className="matriculas"onClick={()=> setAuth({token:null,name:null})} className="logout">Logout</div>
            <div className="logado">{nome}(online)</div>

        </div>
        )
}
function NavegadorNaoLogado(){
    return (
        <div className="naologado">
            <NavLink exact to='/cadastrar' alt="logo" className="cadastrar">Cadastrar</NavLink>
            <NavLink exact to='login' alt="logo" className="login">Login</NavLink>

        </div>
        )
}
export function Navegador(){
 
    const {auth} = useContext(AuthContext);
    return (
        <div className="navegador">
            <img src={imagemtt} className="imagem"></img> 

            {
                auth.token == null? 
                    <NavegadorNaoLogado></NavegadorNaoLogado>:
                    <NavegadorLogado nome={auth.nome}></NavegadorLogado>
            }
        
        </div>
        )
}
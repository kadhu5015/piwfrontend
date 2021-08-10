import "./Navegador.css";
import imagemtt from "./tt.jpg";
import {Link, NavLink} from 'react-router-dom';

export function Navegador(){
 
    return (
        <div className="navegador">

            <img src={imagemtt} className="imagem"></img> 
            <NavLink exact to='/'className="linhadotempo" alt="logo">Linha do tempo</NavLink>
            <NavLink exact to='/postar'className="postar">Postar</NavLink>
            <NavLink exact to='/matriculas'className="matriculas">Matriculas</NavLink>
            <NavLink exact to='/cadastrar'className="cadastrar">Cadastrar</NavLink>
            <NavLink exact to='/login'className="login"> Login</NavLink>
            
            <div className="logado">Eduardo (online)</div>

        </div>)
}
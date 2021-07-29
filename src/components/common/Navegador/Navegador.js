import "./Navegador.css";
import {Link, NavLink} from "react-router-dom";

export function Navegador(){

    let id = 15;
    return (
        <nav className="navegador">

            <NavLink exact className="link-navegador" to="/">
                Pagina principal
            </NavLink>

            <NavLink className="link-navegador" to="/matriculas">
                Listar matriculas
            </NavLink>           

            <NavLink exact className="link-navegador" to={"/matriculas/"+ id}>
                matricula especifica
            </NavLink> 

        </nav>
    )
}
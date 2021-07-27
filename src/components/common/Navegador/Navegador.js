import "./Navegador.css";
import {Link} from "react-router-dom";

export function Navegador(){
    return (
        <nav className="navegador">

            <Link className="link-navegador" to="/">
                Pagina principal
            </Link>

            <Link className="link-navegador" to="/matriculas">
                Listar matriculas
            </Link>           
        </nav>
    )
}
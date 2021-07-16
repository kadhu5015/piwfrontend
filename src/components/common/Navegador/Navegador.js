import "./Navegador.css";
import imagemtt from "./tt.jpg";

export function Navegador(){
 
    return (
        <div className="navegador">

            <img src={imagemtt} className="imagem"></img> 
            <button className="linhadotempo" alt="logo">Linha do tempo</button>
            <button className="postar">Postar</button>
            <div className="logado">Eduardo (online)</div>

        </div>)
}
import "./Navegador.css";

export function Navegador(){
    let Link = ({linkTexto}) =>(<a className="link-navegador" href="http://globo.com">{(linkTexto)}</a>) //esse é o componentezinho que o proff fez no min 11:46
    return (
        <div className="navegador">

            <img className="imagem" src="./twitter"></img> 
            <h3 className="linhadotempo">Linha do tempo</h3>
            <h3 className="postar">Postar</h3>
            

        </div>)
}
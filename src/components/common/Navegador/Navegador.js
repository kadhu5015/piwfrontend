import "./Navegador.css";
//Como estava antes:
// export function Navegador(){
//    return ( <nav>
//         <a>link 1</a>
//         <a>link 2</a>
//         <a>link 3</a>
//         </nav>); 
// } 
export function Navegador(){
    //nao entendi essa linha do let Link
    let Link = ({linkTexto}) =>(<a className="link-navegador" href="http://globo.com">{(linkTexto)}</a>) //esse é o componentezinho que o proff fez no min 11:46
    return (
        <nav className="navegador">
            <Link linkTexto = "link 1 "></Link> 
            <Link linkTexto = "link 2 "></Link> 
            <Link linkTexto = "link 3 "></Link> 
        </nav>
    );
}
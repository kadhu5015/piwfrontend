import { Navegador } from "../../common/Navegador/Navegador";
//import { PaginaprincipalCSS } from "./PaginaPrincipal.css";
import "./PaginaPrincipal.css";
function Conteudo(){
    let disciplinas = [ //isso é pra simular informações que estão no banco de dados
        {
            nome: "LMS",
            codigo: "QXD123",

        }, 
        {
            nome: "piw",
            codigo: "QXD456",
        },
        {
            nome: "sct",
            codigo: "QXD789",
        }

    ];
    // let lis = []; //crio uma lista vazia pra armazenar os dados la de cima
    // for(let i = 0; i < disciplinas.length; i++){ //um for que vai passar por todos os objetos dentro de disciplinas
    //     lis.push(<li>({disciplinas[i].nome} - {disciplinas[i].codigo})</li>) //pegando todos os elementos das disciplinas e colocando dentro de lis
    // }
    // //no return a gente renderiza essa lista
    let lis = disciplinas.map((disciplina)=>(
        <li>
            {disciplina.nome} - {disciplina.codigo}
        </li>))

    return(
        <div className="conteudo-galeria" >
            <div className="card">
                <h3 className="card-titulo">PIW</h3>
                <span className="card-codigo">1234</span>

            </div>
        </div>);
}

function Cabecalho({paginaAtual}){ //aqui eu criei uma variavel chamada paginaAtual que vai receber o valor da chave "paginaAtual" pq tem o mesmo nome
    return( //não esquecer o return
        <header className="cabecalho">
            <h1 className="logo">Matricula Ufc QXD</h1>
            <span className="pagina-atual">Você está na {paginaAtual}</span>
        </header>
    )
}

export function PaginaPrincipal(){
    let nome = "Eduardo";
    let link = (<a href="http://globo.com">Link para a globo</a>);// na tag <Cabeçalho> temos "paginaAtual="p de matricula", a paginaAtual é a chave e o outro o valor"
    return (<div>
        <Cabecalho paginaAtual="Página principal"></Cabecalho> 
        <Navegador></Navegador>
        <Conteudo></Conteudo>
    </div>); 
}
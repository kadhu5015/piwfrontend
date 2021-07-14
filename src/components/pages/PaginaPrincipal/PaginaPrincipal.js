import { Navegador } from "../../common/Navegador/Navegador";
//import { PaginaprincipalCSS } from "./PaginaPrincipal.css";
import "./PaginaPrincipal.css";
import classNames from 'classnames';

function Card({nome,codigo,disponivel}){
    // let nomeClasse = "card" //o card é uma classe q sempre vai ter
    // if (disponivel == false){
    //     nomeClasse = nomeClasse + " fundovermelho";
    // }
    let nomeClasse = classNames("card", {"fundovermelho":!disponivel,})
    return(
        <div className={nomeClasse}>
            <h3 className="card-titulo">{nome}</h3>
            <span className="card-codigo">{codigo}</span>
        </div>
    )
}

function Conteudo(){
    let disciplinas = [ //isso é pra simular informações que estão no banco de dados
        {
            nome: "LMS",
            codigo: "QXD123",
            disponivel: false,

        }, 
        {
            nome: "piw",
            codigo: "QXD456",
            disponivel: false,
        },
        {
            nome: "sct",
            codigo: "QXD789",
            disponivel: false,
        },
        {
            nome: "POO",
            codigo: "8246",
            disponivel: false,
        }

    ];
  
    let cards = disciplinas.map((disciplina)=>(<Card 
                                    nome = {disciplina.nome} 
                                    codigo = {disciplina.codigo}
                                    disponivel = {disciplina.disponivel}></Card>))

    return(
        <div className="conteudo-galeria" >
            {cards}
        </div>)
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
import { Navegador } from "../../common/Navegador/Navegador";
import "./PaginaPrincipal.css";
import classNames from 'classnames';
import history from "../../../history";

function Card({disciplina}){
    function foiClicado(){
        console.log("Clicou kerelhom");
        history.push("/disciplinas/"+disciplina.id);
    }
    let nomeClasse = classNames("card", {"fundovermelho":!disciplina.disponivel,})
    return(
        <div className={nomeClasse} onClick={foiClicado}>
            <h3 className="card-titulo">{disciplina.nome}</h3>
            <span className="card-codigo">{disciplina.codigo}</span>
        </div>
    )
}

function Conteudo(){
    let disciplinas = [ //isso é pra simular informações que estão no banco de dados
        {
            id: "123",
            nome: "LMS",
            codigo: "QXD123",
            disponivel: false,

        }, 
        {
            id: "456",
            nome: "piw",
            codigo: "QXD456",
            disponivel: false,
        },
        {
            id: "789",
            nome: "sct",
            codigo: "QXD789",
            disponivel: false,
        },
        {
            id: "987",
            nome: "POO",
            codigo: "8246",
            disponivel: false,
        }

    ];
  
    let cards = disciplinas.map((disciplina)=>(<Card 
                                   disciplina={disciplina}></Card>))

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
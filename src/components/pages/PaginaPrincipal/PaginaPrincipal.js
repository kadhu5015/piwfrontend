import { Navegador } from "../../common/Navegador/Navegador";

function Conteudo(){
    return(<div>
        <p>meu conteudo atualizado</p>
    </div>);
}

function Cabecalho({paginaAtual}){ //aqui eu criei uma variavel chamada paginaAtual que vai receber o valor da chave "paginaAtual" pq tem o mesmo nome
    return( //não esquecer o return
        <header>
            <h1>Matricula Ufc QXD</h1>
            <span>Você está na {paginaAtual}</span>
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
import { Navegador } from "../../common/Navegador/Navegador";
//alteração teste para ver o log
//agora vamos ver o universo paralelo
//agora outro teste
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
        <div>
            {lis} 
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
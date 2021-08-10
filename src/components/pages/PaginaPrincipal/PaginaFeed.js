import { Navegador } from "../../common/Navegador/Navegador";
import "./PaginaFeed.css";
import {useState} from 'react';

function Botao(){
    const [count, setCount] = useState(0);
    const [clicado, setClicado] = useState(false);
    
    const clicouBotao = () => {
        setCount(count + 1);
        setClicado(true);
    }
    let estilo = {};
    if (clicado==true){
        estilo["backgroundColor"] = "green";
    }else {
        estilo["backgroundColor"] = "blue";
    }
    
    return <button onClick={clicouBotao} style={estilo}>
        Eu fui pressionado {count} vezes
    </button>
}
function Post({nome, mensagem, likes}){
    return(
        <div className="conteudo-post">
            <div className="card">
                <h1 className="card-nome">{nome}</h1>
                <h2 className="card-mensagem">{mensagem}</h2>
                <h3 className="card-likes">{likes} likes</h3>
            </div>    
            <div className="footer">
                <button className="botaolike">Like</button>
            </div>
        </div>
    )
}
function Mensagem(){
    return(
            <div className="comentario">
                <form className="form"> 
                    <div className="objetos">
                        <textarea id="msg"></textarea>
                    </div>
                    <div className="objetos">
                        <button type="submit">Add comentário</button>
                    </div>
                </form>
            </div> 

    )
}

function LinhadoTempo(){
    let posts = [ 
        {
            id: "1",
            nome: "Fulano",
            mensagem: "Não aguento mais estudar PIW",
            likes: "38",
        }, 
        {
            nome: "Cicrano",
            mensagem: "Mal vejo a hora de terminar essa disciplina",
            likes: "2",
        },
        {
            nome: "Beltrano",
            mensagem: "Socorro jesus já é o 21345éssimo erro no meu código",
            likes: "3",
        },
    ];
  
    let allposts = posts.map((post)=>(
        <Post
        nome = {post.nome} 
        mensagem = {post.mensagem}
        likes = {post.likes}></Post>))

    return(
        <div className="conteudo-galeria" >
            {allposts}   
        </div>)
}

export function PaginaFeed(){
    return (<div className="container">
        <Navegador></Navegador>
        <LinhadoTempo></LinhadoTempo>
        <Mensagem></Mensagem>
        <Botao></Botao>

    </div>); 
}
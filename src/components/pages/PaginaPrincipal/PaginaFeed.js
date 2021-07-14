import { Navegador } from "../../common/Navegador/Navegador";
import "./PaginaFeed.css";
import classNames from 'classnames';

function Post({nome, mensagem, likes}){
    return(
        <div className="card">
            <h1 className="card-nome">{nome}</h1>
            <h2 className="card-mensagem">{mensagem}</h2>
            <h3 className="card-likes">{likes}</h3>
        </div>
    )
}

function Conteudo(){
    let posts = [ 
        {
            id: "1",
            nome: "Fulano",
            mensagem: "Não aguento mais estudar PIW",
            likes: "1",
        }, 
        {
            nome: "Cicrano",
            mensagem: "QXD456",
            likes: "2",
        },
        {
            nome: "Beltrano",
            mensagem: "QXD789",
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
        <Conteudo></Conteudo>
        
    </div>); 
}
import { Navegador } from "../../common/Navegador/Navegador";
import "./PaginaFeed.css";


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
        
    </div>); 
}
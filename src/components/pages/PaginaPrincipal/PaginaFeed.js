import { Navegador } from "../../common/Navegador/Navegador";
import "./PaginaFeed.css";
import {useContext, useEffect, useState} from 'react';
import { listarDisciplinas } from "../../../api/disciplinasAPI";
import { AuthContext } from "../../../App";

//function Botao(){

  //  const [count, setCount] = useState(0);
    //const [clicado, setClicado] = useState(false);
    
   // const clicouBotao = () => {
     //   setCount(count + 1);
       // setClicado(true);
    //}
    //let estilo = {};
    //if (clicado==true){
      //  estilo["backgroundColor"] = "green";
    //}else {
     //   estilo["backgroundColor"] = "blue";
   // }
    
   // return <button onClick={clicouBotao} style={estilo}>
     //   Eu fui pressionado {count} vezes
    //</button>
//}

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

function LinhadoTempo({disciplinas}){
    
    let allposts = disciplinas.map(
            (disciplina)=>
                (
                <Post
                    nome = {disciplina.texto} 
                    mensagem = {disciplina.likes}
                ></Post>
                )
    )

    return(
        <div className="conteudo-galeria" >
            {allposts}   
            <Mensagem></Mensagem>
        </div>)
}

export function PaginaFeed(){
    const {auth} = useContext(AuthContext);
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(()=>{
        listarDisciplinas(auth.token)
        .then(
            (response)=>{
                setDisciplinas(response.data);
            }
        )
        .catch(
            (error =>{console.log(error);})
        )
    },[])
    
    return (<div className="container">
        <Navegador></Navegador>
        <LinhadoTempo disciplinas={disciplinas}></LinhadoTempo>
        
    </div>); 
}
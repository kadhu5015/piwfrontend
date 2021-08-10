import { Navegador } from "../../common/Navegador/Navegador"
import history from '../../../history';

function foiClicado(){
    history.push("/");
}

function FormPostar(){
    return(
        <div className="containerformulario">
            <form className="form"> 
                <div>
                    <label>Mensagem:</label>
                    <textarea id="msg"></textarea>
                </div>
                <div >
                    <button onClick={foiClicado} type="submit">postar</button>
                </div>
            </form>
        </div>
    )
}

export function PaginaPostar(){
    return (
        <div className="container">
            <Navegador></Navegador>
            <FormPostar></FormPostar>
        </div>
    )
}


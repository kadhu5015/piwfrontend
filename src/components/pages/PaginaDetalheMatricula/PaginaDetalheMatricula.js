export function PaginaDetalheMatricula(props){
    return (
        <div>
            <h1>Detalhe matricula kerelhom</h1>
            <p>Aqui mostra as info do {props.match.params.id}</p>

        </div>
        
    );
}
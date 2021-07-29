import logo from './logo.svg';
import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas';
import { PaginaDetalheMatricula } from './components/pages/PaginaDetalheMatricula/PaginaDetalheMatricula';
import history from './history';
import { PaginaDetalheDisciplina } from './components/pages/PaginaDetalheDisciplina/PaginaDetalheDisciplina';

function App(){
  return (
  <Router history={history}>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      
      <Route exact path="/disciplinas/:id" component={PaginaDetalheDisciplina}>
        
      </Route>

      <Route exact path="/matriculas">
        <PaginaListarMatriculas></PaginaListarMatriculas>
      </Route>

      <Route path="/matriculas/:id" component={PaginaDetalheMatricula}></Route>
      </Router>
  
  );
}

export default App;

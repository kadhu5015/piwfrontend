import logo from './logo.svg';
import './App.css';
//import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import {BrowserRouter, Route} from 'react-router-dom';
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas';

function App(){
  return (
  <BrowserRouter>
      <Route exact path="/">

        <PaginaPrincipal></PaginaPrincipal>

      </Route>
      
      <Route path="/matriculas">

        <PaginaListarMatriculas></PaginaListarMatriculas>

      </Route>
  </BrowserRouter>
  
  );
}

export default App;

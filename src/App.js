import './App.css';
import { PaginaFeed } from './components/pages/PaginaPrincipal/PaginaFeed';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import {PaginaPostar} from './components/pages/PaginaPostar/PaginaPostar';
import history from './history';
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas';
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadasro';
import { Paginalogin } from './components/pages/PaginaLogin/PaginaLogin';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function App(){
  const [auth, setAuth] = useState({token:null});
  return (
    <AuthContext.Provider value={{auth:auth, setAuth: setAuth}}>
      <Router history={history}>
      <Route exact path='/' component={PaginaFeed}></Route>
      <Route exact path='/postar' component={PaginaPostar}></Route>
      <Route exact path='/matriculas' component={PaginaListarMatriculas}></Route>
      <Route exact path='/cadastrar' component={PaginaCadastro}></Route>
      <Route exact path='/login' component={Paginalogin}></Route>
      </Router>
    </AuthContext.Provider>
  );
}
export default App;

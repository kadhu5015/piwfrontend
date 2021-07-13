import logo from './logo.svg';
import './App.css';

function Link(){

    return <a href="https://www.google.com.br">link aqui mlr</a>

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          inhaim vamu PIWzar? puttttttz <Link></Link>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

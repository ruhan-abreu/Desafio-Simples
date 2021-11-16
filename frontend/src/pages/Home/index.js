import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function Home() {  

  const [tarefas, setTarefas] = useState([]) 
  

    return (
      <div className="App">  
  
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p className="App-p1">
          Progress and Finish Your Task Easily
          </p>
          <p className="App-p2">
          Organized all your task in list and project to help you build new habits
          </p>         
  
          <div className="botao-tarefas">
            <Link to="/tarefas" className="fonte-botao" >Get Started</Link>
          </div>
        </header>
      </div>
    );
}

export default Home
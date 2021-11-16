import { Link } from 'react-router-dom';
import { Style } from '../../App.css';
import '../../App.css';
import { useState } from 'react';


export default function Tarefas (){

    const [tarefas, setTarefas] = useState([])
    const [showTarefas, setShowTarefas] = useState(true)
    const [showDescription, setShowDescription] = useState(false)
    const [showbtnDescri, setShowbtnDescri] = useState (false)
    const [tituloProjeto, setTituloProjeto] = useState('')
    const [subtituloProjeto, setSubtituloProjeto] = useState ('')
     

    async function mostrarTarefas (event) {
     

      let tituloProjeto = event.target.parentNode.querySelector('.Fonte-Lista').innerHTML
      let subTituloProjeto = event.target.parentNode.querySelector('.Fonte-Lista-Span').innerHTML
      
      
     
      
        let url = "http://localhost:3000/tasks" 

            if (tarefas.length == 0) {

          
              let itemsLista = document.getElementsByClassName('item-lista')
          
             
              for (let i = 0; i < itemsLista.length; i++) {
                itemsLista[i].style.marginLeft = '0px';
                
              }
             
             

              setTituloProjeto(tituloProjeto)
              setSubtituloProjeto(subTituloProjeto)

              await fetch(url)
                .then(data => data.json())
                .then((response) => {
                console.log(response) 
                setTarefas(response) 

                
                event.target.parentNode.style.marginLeft = '45px';
                event.target.parentNode.style.marginLeft = '45px';

                }).catch((error) => {
                console.log(error)
                });
            } else {             

              let itemsLista = document.getElementsByClassName('item-lista')
              
             
              for (let i = 0; i < itemsLista.length; i++) {
                
                itemsLista[i].style.marginLeft = '0px';
                
              }
              
              setTituloProjeto('')
              setSubtituloProjeto('')             
              setTarefas([])                
              
              
              event.target.parentNode.style.marginLeft = '0px';                             
            }      
       
         
    
        setShowTarefas(!showTarefas)
        setShowbtnDescri(!showbtnDescri)

    }


    return(
        <div className="tarefas">
            <div>
               <span className="tarefas-titulo">Task Overview</span> 
                
            </div>



            <div className="lista-item1 item-lista" >
              <span className="Fonte-Lista">#1 - create project</span> 
              <span className="Fonte-Lista-Span">create a project using react</span><br/>
              <button className="botao-cont-tarefas" onClick={mostrarTarefas}>5 tasks</button>            
            </div>

          
            <div className="lista-item2 item-lista">
              <span className="Fonte-Lista"> #2 - create project</span>
              <span className="Fonte-Lista-Span">create a project using react</span><br/>
              <button className="botao-cont-tarefas" onClick={mostrarTarefas}>5 tasks</button>
            </div>

            <div className="lista-item3 item-lista">
              <span className="Fonte-Lista">  #3 - create project</span>
              <span className="Fonte-Lista-Span">create a project using react</span><br/>
              <button className="botao-cont-tarefas" onClick={mostrarTarefas}>5 tasks</button>
            </div>

            <div className="lista-item4 item-lista">
              <span className="Fonte-Lista">  #4 - create project</span>
              <span className="Fonte-Lista-Span">create a project using react</span><br/>
              <button className="botao-cont-tarefas" onClick={mostrarTarefas}>5 tasks</button>
            </div>

            <div className="lista-item5 item-lista">
              <span className="Fonte-Lista"> #5 - create project</span>
              <span className="Fonte-Lista-Span">create a project using react</span><br/>
              <button className="botao-cont-tarefas" onClick={mostrarTarefas}>5 tasks</button>
            </div>

            <div className="botao-Newtarefas">
            <a href="#" className="fonte-botao" >New Tasks</a>
            </div>
                
          <div className="quadro-tarefas">
             
                  
                {showTarefas && <h2 className="texto-quadro-tarefas">Select a task to edit</h2>}

                
                {showbtnDescri && <button className="mostrarDescri" onClick={() => setShowDescription(!showDescription)}>Mostrar Descrições</button>}
                
                <h3>{tituloProjeto}</h3>
                <h4>{subtituloProjeto}</h4>
         
                {tarefas.map((item, index) => {
                    
                  return(  

                    <div key={index} className="item-tarefas">
                  
                        <div className="item-tarefas-title">  
                          <div>{item.title}</div> 
                        </div>

                    { showDescription && 
                        <div className="item-tarefas-description"> 
                          <div>{item.description}</div>
                        </div>
                    }

                    </div>

                  )
                })}  

          </div>
        </div>
    );
}



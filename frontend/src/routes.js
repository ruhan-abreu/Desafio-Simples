import { BrowserRouter, Route, Switch} from 'react-router-dom';
import home from './pages/Home';
import tarefas from './pages/Tarefas';

const rotas = () => {

    return (
        <BrowserRouter>
            <Switch>  
                <Route exact path="/" component={home} />
                <Route exact path="/tarefas" component={tarefas} />
            </Switch>         
        </BrowserRouter>
    )
}


export default rotas











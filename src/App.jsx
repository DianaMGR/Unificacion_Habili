import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; import './styles/estilos_i.css';  
import Login from './pages/login';
import ModuloUsuario from "./pages/moduloUsuario";
import Index from './pages/index';
function App () {
  return (   
    <div className='App'>
      <Router>
       <Switch>
          <Route path='/usuario'>
            <ModuloUsuario/> 
          </Route>
          <Route path='/index'>
            <Index/> 
          </Route>
          <Route path='/'>
          <Login/>   
          </Route>
        </Switch>   
      </Router> 
      
    </div>    
  );  
  }
   export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from 'pages'; 
import 'styles/estilos_i.css';  
import Login from 'pages/Login';
import ModuloUsuario from "pages/ModuloUsuario";
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

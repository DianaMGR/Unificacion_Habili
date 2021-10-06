import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Index from 'pages/Index'; 
import 'styles/estilos_i.css';  
import Login from "./pages/Login";
function App () {
  return (   
    <div className='App'>
      <Router>
       <Switch>
          <Route path='/usuario'>
            <Index/> 
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

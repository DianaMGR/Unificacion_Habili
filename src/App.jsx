
//import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Admin from './pages/admin/Index';
import Index from './pages/admin/Index';
import './styles/estilos.css';
import PublicLayout from './Layouts/PublicLayout';
import PrivateLayout from './Layouts/PrivateLayout';
import AuthLayout from './Layouts/AuthLayout';
import Productos from './pages/admin/Productos';
import Cliente from './pages/admin/Usuarios';
import Test from './pages/admin/Test';
import {Auth0Provider} from '@auth0/auth0-react'
function App () {
 
  return (
<Auth0Provider
domain="fivetic.us.auth0.com"
clientId="SP8226jPjQflThoZPO6v3GRDydPOWBRe"
redirectUri={window.location.origin}
>
    <div className='App'>
    <Router>
      <Switch>
        <Route path={['/admin','/admin/Productos','/admin/Usuarios','/admin/ventas']}>
          <PrivateLayout>
            <Switch>
            <Route path='/admin/productos'>
              <Productos />
            </Route>
            <Route path='/admin/ventas'>
             <Test/>
            </Route>
            <Route path='/admin/usuario'>
              <Cliente />
             </Route>  
            <Route path='/admin'>
              <Admin />
            </Route>  
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={['/login', '/registro']}>
          <AuthLayout>
            <Switch>
            <Route path='/login'>
              <Login />
            </Route>    
            <Route path='/registro'>
              <Registro />
            </Route>
            </Switch>
          </AuthLayout>
          </Route>
        <Route path={['/']}>
          <PublicLayout>
            <Switch>
            <Route path='/'>
              <Index />
            </Route>
            </Switch>  
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
    
  </div>
  </Auth0Provider>
  );  
  }
   export default App;

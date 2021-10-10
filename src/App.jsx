import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Admin from './pages/admin/Index';
import Index from './pages/admin/Index';
import './styles/estilos.css';
import PublicLayout from './Layouts/PublicLayout';
import PrivateLayout from './Layouts/PrivateLayout';
import AuthLayout from './Layouts/AuthLayout';
import Vehiculos from './pages/admin/Vehiculos';
import Cliente from './pages/admin/Cliente';
function App () {
  return (
    <Router>
      <Switch>
        <Route path={['/admin','/admin/vehiculos','/admin/clientes']}>
          <PrivateLayout>
            <Switch>
            <Route path='/admin/vehiculos'>
              <Vehiculos />
            </Route>
            <Route path='/admin/clientes'>
              <Cliente />
             </Route>  
            <Route path='/admin'>
              <Admin />
            </Route>  
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={['/Login','/registro']}>
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
    </Router>   );   
   
  }
   export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Index from './pages/Index';
import './styles/estilos.css';
import PublicLayout from './Layouts/PublicLayout';
function App () {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/registro'>
          <Registro/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/'>
          <PublicLayout>
          <Index/>
          </PublicLayout>
        </Route>
      </Switch>


    </Router>
    
  )   
   
   
  }
   export default App;

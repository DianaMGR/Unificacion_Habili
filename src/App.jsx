
import vistalogin from './pages/vistalogin';
import index from './pages';
import index from './pages';
import './styles/estilos.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


  
function App() {
  return (   
    <div className='App'>
  <Router> 
   <Switch>
   <Route path='/registro'>
     <registro />  
     </Route>
     <Route path='/vistalogin'>
     <vistalogin />  
     </Route>
     <Route path='/'>
     <index />  
     </Route>
     </Switch>  
  </Router>  

   </div>
  );  
  }
   export default App;

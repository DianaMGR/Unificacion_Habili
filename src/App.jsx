import AccesoUsuarios from "./componentes/AccesoUsuarios";
import "./styles/estilos.css";
import correo from './media/mail.ico'
import llave from './media/llave.ico'
import logo from './media/M.png'
import gmail from './media/gmail.ico'
function App() {
  return (
    <div className="App">
    <body>
 <form className="formulario">
    <div className='contenedor-imagen'> 
    <img src={logo} className="logo"/>
    
    </div>     
     <h1>Accede al sistema desde una cuenta</h1>
     <div className="contenedor">
               
         <AccesoUsuarios nombre='Correo Electronico' imagen={correo}/> 
         
         <AccesoUsuarios nombre='Contraseña'imagen={llave}/> 
         
         
         <span>O inicia sesion con </span>
         <div className='contenedor-gmail'>
          <a href="https://www.gmail.com/mail/help/intl/es/about.html?iframe " > 
          <img src={gmail} className="correo"/>
          </a>
    
        </div> 
         <input type="submit" value="Continuar" className="button"/>
         <p>Estas aceptando los terminos y condiciones al presionar el boton Continuar.</p>
         <p>¿Olvidaste tu Contraseña?</p>
         
         <p>¿No tienes una cuenta?<a className="link" href="loginvista.html">Registrate</a></p>
     </div>
    </form>
</body>
<footer></footer>
    </div>
    );
  } export default App;

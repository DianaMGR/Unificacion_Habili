import correo from '../media/mail.ico';
import llave from '../media/llave.ico';
import logo from '../media/M.png';
import gmail from '../media/gmail.ico';
import AccesoUsuarios from '../components/AccesoUsuarios';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'



function Vistalogin(){

    return(

<div>
<body>
            <form className="formulario">
            <div className='contenedor-imagen'> 
                <img src={logo} alt="logo"/>
        
            </div>     
            <h1>Accede al sistema desde una cuenta</h1>
    <div className="contenedor">
              
            <AccesoUsuarios nombre='Correo Electronico' imagen={correo}/> 
            <AccesoUsuarios nombre='Contraseña'imagen={llave}/> 
            
            <span>O inicia sesion con </span>
           <div className='contenedor-gmail'>
           <a href='https://www.gmail.com/mail/help/intl/es/about.html?iframe '>  
            <img src={gmail} alt="imagen correo"/>
            </a>
            

            </div> 
            <Link to='/index'>
           
                <input type="submit" value="Continuar" className="button"/>
            </Link>
            <p>Estas aceptando los terminos y condiciones al presionar el boton Continuar.</p>
            <p>¿Olvidaste tu Contraseña?</p>
         
            <p>¿No tienes una cuenta?
            <a href='/registro'>Registrate </a></p>
</div>
</form>
</body>
<Footer/>
</div>

    );

}

export default Vistalogin;
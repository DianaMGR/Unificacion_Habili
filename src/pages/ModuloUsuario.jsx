function ModuloUsuario (){
    return (
        <body>
    <form class="formulario">
    
    <h1>Registra tu cuenta</h1>
     <div class="contenedor">
                 
         <div class="input-contenedor">
         <i class="fas fa-envelope icon"></i>
         <input type="text" placeholder="Correo Electronico"/>
         
         </div>
         
         <div class="input-contenedor">
        <i class="fas fa-user icon"></i>
         <input type="password" placeholder="Nombre"/>
         
         </div>

         <div class="input-contenedor">
            <i class="fas fa-user icon"></i>
             <input type="password" placeholder="Apellido"/>
             
             </div>
             <div class="input-contenedor">
                <i class="fas fa-key icon"></i>
                 <input type="password" placeholder="Contraseña"/>
                 
                 </div>
                 <div class="input-contenedor">
                    <i class="fas fa-mobile-alt icon"></i>
                     <input type="password" placeholder="Celular"/>
                     
                     </div>

         <input type="submit" value="Continuar" class="button"/>
         <p>Estas aceptando los terminos y condiciones al presionar el boton Continuar.</p>
         <p>¿Tienes una cuenta? <a class="link" href="registrarvista.html">Iniciar sesion </a></p>
     </div>
    </form>
</body>
    )
        
    
}

export default ModuloUsuario;
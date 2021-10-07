import Footer from "../components/Footer"

function Index(){
    return(
   <div>     
    <body>
    <header>
    <nav class="navegacion">
           <ul class="menu">
                        <li>
                            <a href="#">Usuarios</a>
                        </li>
                        <li>
                            <a href="#">Productos</a>
                        </li>
                        <li>
                            <a href="#">ventas</a>
                        </li>	
                        <li>
                            <a href="#">Clientes</a>
                        </li>
                        <li>
                            <a href="#">Salir</a>
                        </li>
            </ul>
            </nav>
        </header>
    </body>  
    <Footer />  
    </div>
    )
}

export default Index;
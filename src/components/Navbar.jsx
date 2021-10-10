import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-red-400">
      <ul className='flex w-full justify-between my-3'>
        <li>logo</li>  
        <li>navegacion1</li> 
        <li> navegacion2</li> 
        <li className='px-3'>
            <button>Iniciar Sesion</button>
            </li> 
      </ul>      
        
    </nav>
    )
}

export default Navbar

import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav className="bg-blue-900">
      <ul className='flex w-full justify-between my-3'>
        <li>logo</li>  
        <li>navegacion1</li> 
        <li> navegacion2</li> 
        <li className='px-3'>
         <Link to='/login'>   
            <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hoover:bg-indigo-800'>Iniciar Sesion
            </button>
          </Link>  
            </li> 
      </ul>      
        
    </nav>
    );
};

export default Navbar

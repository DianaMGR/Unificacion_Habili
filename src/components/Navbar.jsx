import React from 'react';

import logo from '../media/M.png';
import {useAuth0} from '@auth0/auth0-react'
const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
    return (
        <nav className="bg-blue-900">
      <ul className='flex w-full justify-between my-3'>
        <li>
          <div className=''>
          <img src={logo} alt='logo'/>
          </div>
        </li>  
        <li>navegacion1</li> 
        <li> navegacion2</li> 
        <li className='px-3'>
           
            <button onClick={() => loginWithRedirect()}>Log In className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hoover:bg-indigo-800'>Iniciar Sesion
            </button>
            
            </li> 
      </ul>      
        
    </nav>
    );
};

export default Navbar

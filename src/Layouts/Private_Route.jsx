import { useUser } from 'context/userContext';
import React from 'react';
import {useAuth0} from '@auth0/auth0-react'


const PrivateRoute = ({  children }) => {
    
       
  const {  isAuthenticated, isLoading } = useAuth0();

 if(isLoading) return<div>
Loading...
 </div>

  return isAuthenticated?( <>{children}</>
 ):( <div className='text-6xl text-blue-500'>
  No estas Autenticado para Ingresar a este Sitio
   </div>
    );
};
export default PrivateRoute;
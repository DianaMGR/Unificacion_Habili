import axios from "axios";
//import Productos from "../pages/admin/Productos";


export const obtenerproductos = async (successCallback,errorCallbak)=>{
const options={ method: 'GET', url: 'http://localhost:5000/vehiculos'};
await axios.request(options).then(successCallback).catch( errorCallbak );
     };

export const crearVehiculo = async (data,successCallback,errorCallbak)=>{
const options = {
  method: 'POST',
  url: 'http://localhost:5000/vehiculos/nuevo',
  headers: {'Content-Type': 'application/json'},
  data,
};
await axios.request(options).then(successCallback).catch( errorCallbak );
     };


export const editarVehiculo = async (id, data, successCallback, errorCallbak)=>  {
const options = {
    method: 'PATCH',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: {'Content-Type': 'application/json'},
    data,
    
  };
await axios.request(options).then(successCallback).catch( errorCallbak );
};    


export const eliminarVehiculo = async (id, successCallback, errorCallbak)=>{
  const options ={ method: 'DELETE',
  url: `http://localhost:5000/vehiculos/${id}/`,
  headers: {'Content-Type': 'application/json'}
};

await axios.request(options).then(successCallback).catch( errorCallbak );

};

export const obtenerUsuarios = async (successCallback, errorCallbak)=>{
const options = {method: 'GET',url:'http://localhost:5000/usuarios' };

await axios.request(options).then(successCallback).catch(errorCallbak);
  };

export const CrearVenta = async (data,successCallback, errorCallbak ) =>{
  const options = {
  method: 'POST', 
  url:'http://localhost:5000/ventas/nuevo',
  headers: {'Content-Type': 'application/json'} ,data 
};

await axios.request(options).then(successCallback).catch(errorCallbak);
};
 


          
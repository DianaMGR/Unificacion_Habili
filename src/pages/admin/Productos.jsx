import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Productos = () => {
  const[mostrarTabla, setMostrarTabla] = useState(true);
  const [productos,setProductos]=useState([]);
  const [textoBoton, setTextoBoton]=useState('crear Nuevo Producto');
  const [colorBoton, setColorBoton]=useState('indigo')
  useEffect(() => {
//lista de productos del backend
const obtenerproductos = async()=>{
  await axios
  .request(options)
  .then(function (response) {
   setProductos(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  
}

if(mostrarTabla){
  obtenerproductos();

  const options = {
  method: 'GET',
  url: 'http://localhost:5000/vehiculos',
  headers: {'Content-Type': 'application/json'}
};
}
  },[mostrarTabla]);
  
  useEffect(()=>{
if (mostrarTabla){
setTextoBoton('Nuevo Producto');
setColorBoton('indigo')
}
else{
  setTextoBoton('Mostrar Productos');
  setColorBoton('green')
}
  },[mostrarTabla]);
      return (
      <div className='flex h-full w-full flex-col items-center justify-start p-8'>
        <div className='flex flex-col'></div>
        <h2 className='text-4xl font-extrabold text-gray-900 paddin-10'>Gestion De Productos</h2>
        <button onClick={()=>{setMostrarTabla
        (!mostrarTabla);
        }} 
        className={`text-while bg-${colorBoton}-500 p-5 rounded-xl m-10 text-white self-end`}>
       {textoBoton} 
        </button>
        {mostrarTabla ? (
        <TablaProductos listaProductos={productos}/>
        ):( 
        <FormularioCreacionProductos
         setMostrarTabla={setMostrarTabla} 
         listaProductos={productos}
         setProductos={setProductos}
    />
        )}
        
        <ToastContainer position="bottom-center" autoClose={1000} />       
      </div>  
         
    );
      };

const TablaProductos = ({listaProductos })=> {
  useEffect(() =>{
  console.log("Listado vehiculos componente tabla",listaProductos);
  },[listaProductos]);
  return (
    <div className='flex flex-col'>
       <h2 className='text-3xl font-extrabold text-gray-900 paddin-10'>Lista Productos</h2>
    <table> 
    <thead>
      <tr>
       
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>año</th>
      </tr>
      </thead>
      <tbody>
        {listaProductos.map((producto)=>{
         return(
          <tr>
          <td>{producto.name}</td>
          <td>{producto.brand}</td>
          <td>{producto.model}</td>  
          </tr>
         ) 
        })}
        </tbody>
      </table>
    
  </div>
  );
};


const FormularioCreacionProductos = ({
setMostrarTabla,
listaProductos,
setProductos}) => {
 const form =useRef(null); 
 const submitForm= async (e)=>{
  e.preventDefault();
  const fd = new FormData(form.current);

  const nuevoproducto ={};
  fd.forEach((value,keys)=>{
  nuevoproducto[keys]=value;
});

const options = {
  method: 'POST',
  url: 'http://localhost:5000/vehiculos/nuevo',
  headers: {'Content-Type': 'application/json'},
  data: {name:nuevoproducto.name, 
    brand: nuevoproducto.brand,
    model:nuevoproducto.model},
};

await axios
.request(options)
.then(function (response) {
 console.log(response.data);
 toast.success("Producto Agregado exitosamente ");
}).catch(function (error) {
  console.error(error);
  toast.success("Error creando Producto ");
});

 setMostrarTabla(true);
 
 
};
 return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-xl font-black text-gray-800'>Nuevo Producto</h2>
    <form ref={form} onSubmit={submitForm} className='flex flex-col'>
     <label className='flex flex-col' name='nombre'htmlFor='nombre'> 
     Nombre del Producto
     <input 
     name='name'
     className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
      type='text'
      placeholder='Aveo' 
      required
      /></label>

     <label className='flex flex-col'htmlFor='descripcion'>
     Descripcion
     <select  className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
     name='brand'
     required
     defaultValue={0}
     >
      <option disabled value={0}>Seleccione Opcion</option>
       <option>Marca1</option>
       <option>Marca2</option>
       <option>Marca3</option>
     </select>
     </label> 
     <label className='flex flex-col' htmlFor='año'>Año 
     <input name='model' className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
      type='number'
      min={1999}
      max={2022}
      placeholder='2021'  
      required/>
      
      </label>
      <button type='submit' className='col-span-2 bg-green-300 p-2 rounded-full shadow-md text-white' 
      >
      Guardar</button>
    </form>
  </div>
 );
};

export default Productos;
import { nanoid } from 'nanoid';
import React, {useState, useEffect, useRef} from 'react';
import { CrearVenta, obtenerUsuarios} from '../../utils/api';
import {obtenerproductos } from '../../utils/api';




const Test =()=>{
const form = useRef(null);
const [vendedores, setVendedores] = useState([]);
const [producto, setProductos] = useState([]);
const[productoseleccion, setseleccionProductos] = useState([]);




useEffect(() => {
const fetchVendedores = async ()=>{
  await obtenerUsuarios(
  (response)=>{
   console.log("respuesta de usuario:",response ) ;
  setVendedores(response.data);
  },
  (error)=>{
    console.error(error);
  }
 );
};

const fecthProductos = async()=>{
  await obtenerproductos(
    (response)=>{setProductos(response.data);
    },
  (error)=>{console.error(error)}
  );
 };
fetchVendedores();
fecthProductos(); 
},[]);

useEffect(() => {

  console.log('productos seleccionados', productoseleccion);
  
}, [productoseleccion]);

const agregarProducto =()=>
setseleccionProductos([...productoseleccion, DropDownProductos]);

};

const submitForm= async (e)=>{
  e.preventDefault();
  const fd = new FormData(form.current);
        
          const formData ={};
          fd.forEach((value,key)=>{
          formData[key]=value;
        });
 console.log("Form Data",formData);      
//const infoConsolidada = {
  //  valor:formData.valor,
    //vendedor: vendedores.filter((v) => v._id === formData.vendedor)[0],
    //vehiculos: producto.filter((v) => v._id === formData.producto)[0],
      //};
    //console.log(infoConsolidada);  

//await CrearVenta( 
//infoConsolidada,
  //(response) =>{
  //console.log(response)
  //},
  //(error)=>{
  //console.error(error)
  //}
  //);
};


 return (
<div className='flex h-full overflow-y-scroll items-center justify-center'>
  <h1 className='text-3xl font-extrabold text-gray-900 m-3'>Gestionar Nueva Venta</h1>
  <form ref={form} onSubmit={submitForm} className='flex flex-col'>
   <label className='flex flex-col' html='vendedor'>
     <span className='text-2xl font-gray-900'>Vendedor</span>  
      <select name='vendedor' className='p-2' defaultValue={-1}>
        <option disabled value={-1}> 
         Seleccione un Vendedor</option>
        {vendedores.map((el)=> {
         return (<optiion 
         key={nanoid()}value={el._id}>{`${el.name} ${el._lastname}`}</optiion>
        );
        })}
       </select> 
   </label>
   <div className='flex flex-col'>
   <span >Selecciona Productos</span>
   <button onClick={() =>agregarProducto() }
   className='col-span-2 bg-indigo-700 p-2 rounde-full shadow-md hover:bg-indigo-500 text-white'>
    Agregar Nuevo Producto
    </button>
   </div> 

   {productoseleccion.mpa((DropDownProductos, index)=>{
    return (
    <div className="flex">
    <DropDownProductos key={nanoid()}producto={producto}nombre_={`vehiculo_${index}`}/>;
    <button>Eliminar</button>
    </div>
    );
    })}     
    

   <label className='flex flex-col' html='producto'>
     <span className='text-2xl font-gray-900'>Producto</span>  
      <select name='producto' className='p-2' defaultValue={-1}>
        <option disabled value={-1}>  
        Seleccione un Producto</option>
        {productos.map((el)=> {
         return  (  <optiion
         key={nanoid()}
         value={el._id}>
         {`${el.name} ${el._brand} ${el._model}`}</optiion>);
        })}
        </select> 
   </label>

   
   
   <label className='flex flex-col'>
     <span>Valor de La Venta</span>
     <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'type='number' name='valor'/>
   </label>
   <button type='submit'
   className='col-span-2 bg-indigo-700 p-2 rounde-full shadow-md hover:bg-indigo-500 text-white'>
     Crear Venta
     </button>
   </form>  
</div> 

  ); };

 const DropDownProductos =({producto,nombre})=>{
 console.log(producto);  
  return(

  <label className='flex flex-col' html='producto'>
  <span className='text-2xl font-gray-900'>Producto</span>  
   <select name='name' className='p-2' defaultValue={-1}>
     <option disabled value={-1}>  
     Seleccione un Producto</option>
     {producto.map((el)=> {
      return (
      <optiion
      key={nanoid()}
      value={el._id}>
      {`${el.name} ${el._brand} ${el._model}`}</optiion>
      );
     })}
    </select>
    </label>
  );
  

 };

export default Test;
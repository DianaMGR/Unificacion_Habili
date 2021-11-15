import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerproductos } from "../../utils/api";
import { crearVehiculo} from "../../utils/api";
import { editarVehiculo} from "../../utils/api";
import {eliminarVehiculo} from "../../utils/api";

const Productos = () => {
  const[mostrarTabla, setMostrarTabla] = useState(true);
  const [productos,setProductos]=useState([]);
  const [textoBoton, setTextoBoton]=useState('crear Nuevo Producto');
  const [colorBoton, setColorBoton]=useState('indigo');
  const [ejecutarConsulta, setEjecutarConsulta]=useState(true);
  
      
  useEffect(() =>{
  console.log('consulta', ejecutarConsulta);
  if(ejecutarConsulta){
    obtenerproductos(
      (response)=>{
    console.log('La respuesta es:',response);    
    setProductos(response.data);
  },
  (error)=>{
    console.error('El error es:',error);
  }
    );
    setEjecutarConsulta(false);
  }
 }, [ejecutarConsulta]);

  useEffect(() =>{
    //obtener lista del Productos del Backend
    if (mostrarTabla){
      setEjecutarConsulta(true);

    }
  }, [mostrarTabla]);

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
        <button
        onClick={()=>{
          setMostrarTabla (!mostrarTabla);
        }} 
        className={`text-while bg-${colorBoton}-500 p-5 rounded-xl m-10 text-white self-end`}
        >
       {textoBoton} 
        </button>
        
        {mostrarTabla ? (
        <TablaProductos
        listaProductos={productos}
        setEjecutarConsulta={setEjecutarConsulta}
        />
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

const TablaProductos = ({listaProductos, setEjecutarConsulta })=> {
  const [busqueda, setbusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => { 
  setProductosFiltrados(
  listaProductos.filter((elemento)=>{
  return JSON.stringify(elemento)
  .toLowerCase()
  .includes(busqueda.toLowerCase());  
  })
  );
  
  },[busqueda, listaProductos]);
    
 return (
    <div className='flex flex-col items-center justify-center w-full'>
    <input 
    value={busqueda}
    onChange={e=>setbusqueda(e.target.value)}
    placeholder='Buscar Producto' 
    className='border border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-400'
    />
    <h2 className='text-3xl font-extrabold text-gray-800 '>
      Lista Productos
     </h2>
    <div className='hidden md:flex w-full'>
    <table className='tabla'> 
    <thead> 
       <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Año</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
        {productosFiltrados.map((producto) => {
         return (        
         <FilaProducto  
         key={nanoid()}      
         producto={producto} 
         setEjecutarConsulta={setEjecutarConsulta}
        />        
         );
        })}

        </tbody>
      </table>
      </div> 
      <div className='flex flex-col w-full m-2 md:hidden'>
      {productosFiltrados.map((el)=>{
        return(
        <div className='bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl' >
        <span>{el.name}</span>
        <span>{el.brand}</span>
        <span>{el.model}</span>
        </div>

      );
    })}

     </div>
  </div>
      );
  };     


const FilaProducto = ({producto, setEjecutarConsulta}) => {
const [edit, setEdit]= useState(false);
const [openDialog, setOpenDialog]= useState(false)
const [infoNuevoProducto, setInfoNuevoProducto] = useState({
 _Id: producto._Id,  
 name:producto.name,
 brand:producto.brand,
 model:producto.model, 
})
const actualizarProducto = async () =>{
  
  //enviar info al backend


await editarVehiculo(
  producto._id,  //consultar producto fronted vs producto del backend  
  {
   name:infoNuevoProducto.name,
   brand:infoNuevoProducto.brand,
   model:infoNuevoProducto.model
  },
  (response)=>{
    console.log(response.data);
    toast.success('Producto modificado exitosamente');
    setEdit(false);
    setEjecutarConsulta(true);
  },
  
  (error)=>{
  toast.error('error al modificar producto'); 
  console.error(error);
  }
  );   
    
};  

  const deleteProducto = async ()=>{
    
   await eliminarVehiculo(
     producto._id,
     (response) => {
      console.log(response.data);
       toast.success('Producto eliminado exitosamente');
       setEjecutarConsulta(true);
     },
     (error)=>{
      console.error(error);
      toast.error('Producto eliminado exitosamente');
     }
      );
    setOpenDialog(false)
  };
  //aqui se cambia el tr?
  return ( 
    <tr >
    {edit ? (
    <> 
    <td>{infoNuevoProducto._id}</td>
     <td>
        <input 
        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
        type=' text' 
       value={infoNuevoProducto.name}
       onChange={e=>
        setInfoNuevoProducto({
         ...infoNuevoProducto,
         name:e.target.value
        })
      }
       />
       </td>
      <td>
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' 
        type=' text' 
        value={infoNuevoProducto.brand}
        onChange={e=>
        setInfoNuevoProducto({
          ...infoNuevoProducto,
          brand:e.target.value,
        })
      }
        
        />
      </td>
      <td>
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
        type=' text'
        value={infoNuevoProducto.model}
        onChange={e=>
          setInfoNuevoProducto({
            ...infoNuevoProducto, 
            model:e.target.value
          })
        }
        />
       </td>
    
  </>
    ):(
   <>
    <td>{producto._id}</td>   
    <td>{producto.name}</td>
     <td>{producto.brand}</td>
     <td>{producto.model}</td>
     
   </>
  )}
    <td>    
      <div className='flex w-ful justify-around'>
       {edit ? (
     <>
       <Tooltip title='comfirmar edicion' arrow> 
       <i 
       onclick={() => actualizarProducto()}
       className="fas fa-check text-green-700 hover:text-green-500"
        />
      </Tooltip>
      <Tooltip title='cancelar Edicion' arrow>
      <i 
onclick={() => setEdit(!edit)}
className='fas fa-ban text-yellow-700 hover:text-yellow-500'
 />
</Tooltip>
</>
       ):(
      <>  
      <Tooltip title='editar Producto' arrow> 
      <i 
      onclick={() => setEdit(!edit)}
      className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
       />
       </Tooltip>  
      
       <Tooltip title='eliminar Producto' arrow>
             <i 
      onClick={()=>setOpenDialog(true)}className='fas fa-trash text-red-700 hover:text-red-500'
      />
      </Tooltip>
      </> 
      )} 
      </div>
      <Dialog open={openDialog}>
        <div className='p-8 flex-col'>
          <h1 className='text-gray-700 text-xl font-bold'>
            ¿Esta seguro de eliminar?
          </h1>
       <div className='flex w-full items-center justify-center my-4 '> 
        <button
        onClick={() =>deleteProducto()} 
        className='mx-2 px-4 py-2 bg-blue-400 text-white hover:bg-green-800 rounded-md shadow-md'>
          Si
          </button> 
        <button
        onClick={()=>setOpenDialog (false)}
        className='mx-2 px-4 py-2  bg-red-400  text-white hover:bg-red-700 rounded-md shadow-md'>
          No
          </button> 
        </div>
        </div>
      </Dialog>
   </td>  
   </tr>
  
  );
};
const FormularioCreacionProductos = ({
setMostrarTabla,
listaProductos,
setProductos,
}) => {
 const form =useRef(null); 

 const submitForm= async (e)=>{
  e.preventDefault();
  const fd = new FormData(form.current);

  const nuevoproducto ={};
  fd.forEach((value,key)=>{
  nuevoproducto[key]=value;
});
await crearVehiculo({
  name:nuevoproducto.name,
  brand:nuevoproducto.brand,
  model:nuevoproducto.model
},
(response)=>{
console.log(response.data);
toast.success('Producto Agregado exitosamente')
},
(error)=>{
console.error(error);
toast.error('error creando Producto');
}
);

setMostrarTabla(true);
};

 return (
    <div className='flex flex-col items-center justify-center'>
     
     <h2 className='text-xl font-black text-gray-800'>Nuevo Producto</h2>
    <form ref={form} 
    onSubmit={submitForm}
    className='flex flex-col'>

     <label className='flex flex-col' name='nombre'htmlFor='nombre'> 
     Nombre del Producto
     <input 
     name='name'
     className=' bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
      type='text'
      placeholder='Nombre' 
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
      <button type='submit' 
      className='col-span-2 bg-green-300 p-2 rounded-full shadow-md text-white' 
      >
      Guardar Proucto
     </button>
    </form>
  </div>
 );
};

export default Productos;
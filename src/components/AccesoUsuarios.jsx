function AccesoUsuarios(props){

    return (
      <div className="input-contenedor">
      <img src={props.imagen} alt="icon"/>
      <input type="password" placeholder={props.nombre}/>
               
       </div>
    );  
  }
  export default AccesoUsuarios;


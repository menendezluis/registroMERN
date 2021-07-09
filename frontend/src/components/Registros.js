import React,{useState, useEffect} from 'react';

const Registros = () => {
    const [ data, setData ] = useState([]);
    
  const columns = [{
          dateField: "_id",
          text: "Id",
        },       {
          dateField: "nombre",
          text: "Nombre",
        },
        {
          dateField: "direccion",
          text: "Direccion",
        },
        {
          dateField: "genero",
          text: "Genero",
        },
        {
          dateField: "telefono",
          text: "Telefono",
        },
        {
          dateField: "nacimiento",
          text: "Cumpleanos",
        },
        {
          dateField: "carrera",
          field: "Carrera",
        },
        {
           dateField: "fecha",
          field: "Fecha",
        }]
  
  const consultarApi = async () => {
      const url = `http://localhost:4000/api`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
       setData(resultado);
       console.log(data);
       
  }
    
  useEffect(() => {
    consultarApi()
    }, [])
    
    return (
      <>
      
  <button onClick={consultarApi}> Actualizar datos </button>
      <div style={{ padding: "20px" }}>
      <h1 className="h2">Participantes</h1>
  
        <table>
  <tr>
    <th>Nombre</th>
    <th>Genero</th>
    <th>Direccion</th>
    <th>Telefono</th>
    <th>Categoria</th>
    <th>Carrera</th>
    <th>Fecha participa</th>
  </tr>
      {
        data.map(item => (
          <tr key="item.id">
          <td>{item.nombre} </td>
          <td>{item.genero} </td>
          <td>{item.direccion}</td>
          <td>{item.telefono}</td>
          <td>{item.poesia}</td>
          <td>{item.carrera}</td>
           <td>{item.fecha}</td>
          </tr>
          ))
      }
      </table>
  
    </div>
      </>
    );
  }
  
  export default Registros;
import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Formulario(){
  
  const [nombre,setNombre]=useState('')
  const [apellido,setApellido]=useState('');
  const [salario,setSalario]=useState('');
  
  const registrar=async(e)=>{
    console.log('entre')
    e.preventDefault()
    const NuevoEmpleado={nombre,apellido,salario}
    const respuesta=await Axios.post('http://localhost:4000/api',NuevoEmpleado)
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje
    Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div className="container col-md-3 mt-4">
    <form onSubmit={registrar}>
      <div className="form-group">
        <input type="texto" className="form-control"  placeholder="Nombre"
          onChange={e=>setNombre(e.target.value)}/>
      </div>
      <div className="form-group">
        <input type="texto" className="form-control"  placeholder="Apellido"
          onChange={e=>setApellido(e.target.value)}/>
      </div>
        <div className="form-group">
        <input type="texto" className="form-control"  placeholder="Salario"
          onChange={e=>setSalario(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">Guardar
      </button>
    </form>
    </div>
  )
}
import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
//import Registros from './Registros'

//Calculamos la edad

function edad(fechaformulario) {
  //con esta funcion convertimos la fecha en edad
    var hoy = new Date();
    var cumpleanos = new Date(fechaformulario);
    var anios = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        anios--;
    }
    return anios;
}

//funcion de formateo de fecha para mostrar en pantalla

function formatoFecha(fecha, formato) {
    const map = {
        dd: fecha.getDate(),
        mm: fecha.getMonth() + 1,
        yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear()
    }

    return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
}

export default function Formulario(){
  //definimos el state

  const [carnet,setCarnet]=useState('')
  const [nombre,setNombre]=useState('')
  const [direccion,setDireccion]=useState('');
  const [telefono,setTelefono]=useState('');
  const [nacimiento,setNacimiento]=useState('');
  const [carrera,setCarrera]=useState('');
  const [genero,setGenero]=useState('');
  const [poesia,setPoesia]=useState('');
  const calculoCita = new Date()
  
    const expreg = new RegExp('[aA]{1}[1-9]{1}[5]{1}[1-9]{2}[193]{1}');
  //Carnet: Será válido si el valor alfanumérico del carnet cumple las siguientes condiciones:
  //La longitud del carnet será de 6 caracteres y entre su cadena no tendrá ceros
  //El primer carácter deberá ser A (distingue entre mayúscula y minúscula)
  //El tercer carácter deberá de ser 5
  //El ultimo carácter deberá de terminar en 1,3 o 9.

  
  const registrar=async(e)=>{
    
    e.preventDefault();
  if (!expreg.test(carnet)){
       Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Carnet incorrecto!',
  showConfirmButton: false,
      timer: 3000
})
    } else
if(edad(nacimiento) <= 18){
//  Fecha de nacimiento:
//será válido si es mayor a 17 años

   Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Debes ser mayor de edad para participar!',
  showConfirmButton: false,
      timer: 3000
})
}
else{
  var validarCita = carnet.toString().substr(-1);
  // Validamos terminacion 1 Dramatica = + 5 dias
  if (parseInt(validarCita)===1 && poesia ==='Dramatica') {
  calculoCita.setDate(calculoCita.getDate()+5);}
  else
    // Validamos terminacion 3 Epica  = Ultimo dia del mes
  if (parseInt(validarCita)===3 && poesia ==='Epica') {
    const ultimoDia = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    calculoCita.setDate(ultimoDia);
  }
  //Cualquier otro dia el proximo viernes
  else{
    const dia =  new Date();
    var diaSemana = dia.getDay();
    if (diaSemana === 0)
       calculoCita.setDate(calculoCita.getDate()+5);
    else if (diaSemana === 1)
       calculoCita.setDate(calculoCita.getDate()+4);
         else if (diaSemana === 2)
       calculoCita.setDate(calculoCita.getDate()+3);
        else if (diaSemana === 3)
       calculoCita.setDate(calculoCita.getDate()+2);
         else if (diaSemana === 4)
       calculoCita.setDate(calculoCita.getDate()+1);
         else if (diaSemana === 5)
       calculoCita.setDate(calculoCita.getDate()+7);
         else if (diaSemana === 6)
       calculoCita.setDate(calculoCita.getDate()+6);
}
// Eliminamos la posibilidad que caiga domingo o sabado

    if (calculoCita.getDate===6)
      calculoCita.setDate(calculoCita.getDate()+2);
    if (calculoCita.getDate===0)
      calculoCita.setDate(calculoCita.getDate()+1);
    const fecha = new Date(calculoCita);
    console.log(fecha);
    const NuevoAlumno={carnet, nombre,direccion,genero,telefono,nacimiento,carrera,poesia,fecha}
    const respuesta=await Axios.post('http://localhost:4000/api',NuevoAlumno)
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje
    Swal.fire({
      icon: 'success',
      title: mensaje+formatoFecha(fecha, 'dd/mm/yyyy')+' se puntual.' ,
      showConfirmButton: true,
     
    })
}
  }
  return (
        <div className="container">
    <div className="container col-md-3 mt-4">
     <div className="form-group">
        <input type="texto" className="form-control mt-2"  require placeholder="Carnet"
          onChange={e=>setCarnet(e.target.value)}
          required/>
      </div>
    <form onSubmit={registrar}>
      <div className="form-group">
        <input type="texto" className="form-control mt-2"  require placeholder="Nombre Completo"
          onChange={e=>setNombre(e.target.value)} required/>
      </div>
      
      <div className="form-group">
           <input type="texto" className="form-control mt-2"  placeholder="Direccion"
          onChange={e=>setDireccion(e.target.value)} required/>
      </div>
      
      
      <div className="form-group">
      <select className="form-control mt-2" onChange={e=>setGenero(e.target.value)} required>
            <option default>Genero</option>
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
    </select>
      </div>
       <div className="form-group">
        <input type="tel" className="form-control mt-2"  placeholder="Telefono"
         pattern="[0-9]{8}"
          onChange={e=>setTelefono(e.target.value)}
       required/>
      </div>
       
      <div className="form-group">
      <label className="control-label mt-2" for="date">Nacimiento:</label>
      <input className="form-control mt-2" id="date" name="date" placeholder="MM/DD/YYYY" type="date"
      onChange={e=>setNacimiento(e.target.value)}/>
      </div>
      <div className="form-group">
        <input type="texto" className="form-control mt-2"  require placeholder="Carrera"
          onChange={e=>setCarrera(e.target.value)} required/>
      </div>
       <div className="form-group">
      <select className="form-control mt-2" onChange={e=>setPoesia(e.target.value)} required>
            <option default disable>Tipo de poesia</option>
      <option value="Lirica">Lirica</option>
      <option value="Epica">Epica</option>
      <option value="Dramatica">Dramatica</option>
    </select>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Guardar
      </button>
    </form>
</div>
   
    </div>
  )
}
const PruebaCtrl={}
const Alumno=require('../models/prueba.models')
//consulta
PruebaCtrl.obtener=(req,res)=> {
  
  res.send('Consulta no valida')
  
}

//put
PruebaCtrl.crear=async(req,res)=>{
  console.log(req);
  const {nombre,
  direccion,
  genero,
  telefono,
  nacimiento,
  carrera,
  poesia,
  fecha
  }=req.body
  const NuevoRegistro=new Alumno({
    nombre,
    direccion,
    genero,
    telefono,
    nacimiento,
    carrera,
    poesia,
    fecha
  })
  await NuevoRegistro.save()
  res.json({
    mensaje:'Espacio reservado para: '
  })
}
//PruebaCtrl.crear=(req,res)=>{
//  res.send('funcionando desde post')
//}
//actualizar

PruebaCtrl.actualizar=(req,res)=>{
  res.send('funcionando desde put')
}
//eliminando
PruebaCtrl.eliminar=(req,res)=>{
  res.send('funcionando desde delete')
}
module.exports=PruebaCtrl
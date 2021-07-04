const PruebaCtrl={}
const Empleado=require('../models/prueba.models')
//consulta
PruebaCtrl.obtener=(req,res)=> {
  
  res.send('funcionando desde get')
  
}

//put
PruebaCtrl.crear=async(req,res)=>{
  console.log(req);
  const {nombre,apellido,salario}=req.body
  const NuevoRegistro=new Empleado({
    nombre,
    apellido,
    salario
  })
  await NuevoRegistro.save()
  res.json({
    mensaje:'Empleado guardado'
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
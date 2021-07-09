const PruebaCtrl={}
const Alumno=require('../models/prueba.models')
//consulta
PruebaCtrl.obtener= async (req,res)=> {
    const alumnos = await Alumno.find()
	res.send(alumnos)

    
    //res.json({
        //status: 'API Its Working',
    //    message: 'Welcome to RESTHub crafted with love!'
  //  });
  
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
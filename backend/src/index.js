//importamos librerias para el backend
const express=require('express')
const app=express()
const morgan=require('morgan')
const cors=require('cors')
const bodyparser=require('body-parser')
//coneccion a la base de datos
require('./database')

// iniciamos el arranque
app.set('Port',4000)

app.use(morgan('dev'))

app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json())

//permitimos las conexiones externas con cors
app.use(cors())

//Rutas
app.use('/api/',require('./routes/prueba.route.js'))
//start server
app.listen(app.get('Port'),()=>{
  console.log('escuchando sin el puerto', app.get('Port'))
})
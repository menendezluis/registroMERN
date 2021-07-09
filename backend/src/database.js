const mongoose=require('mongoose')

URI=('mongodb://localhost/poesia')

mongoose.connect(URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreatedIndex:true,
  useFindAndModify:false
}).then(db=>console.log('base de datos conectada'))
  .catch(error=>console.log(error))

module.export=mongoose
Registro de Evento de Poesia
Para esta aplicacion web utilice el stack MERN basado en Mongo, ExpressJS y Node para el backend y React para el FrontEnd.


Para instalarlo necesitas tener previamente:
	nodeJS 14.17
	mongo	4.4.6
	npm 7.19.1

Pasos:
	Clonar el repositorio de Github
	https://github.com/menendezluis/registroMERN.git

Este repositorio se compone de 2 partes:
	FrontEnd
	BackEnd

Luego de descargar el repositorio debes ingresar a cada carpeta respectivamente e instalar los componentes
	backend/
	npm install

	frontend/
	npm install

La base de datos que creamos le llame por nombre poesia  y la coleccion Alumnos

Con esto listo, puedes proceder a levantar los dos servidores
	cd backend/
	npm run dev

	**La base de datos debe estar inicializada
	//Esta acción levantara el api en 
	http://localhost:4000/api	
	Del CRUD solo utilizaremos dos métodos
	Create 
/post
Read 
/get


	cd frontend/
	npm start


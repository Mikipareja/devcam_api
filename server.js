const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//leer el archivo de configuracion
dotenv.config({path:'./config/config.env'});

//Conexion a MongoDB
connectDB();

//crear una app a partir de la clase express
const app = express();

//Parse de json en express
app.use(express.json());

//especificar el archivo de rutas campus.js
const campus = require('./routes/campus');



//montar (activar) rutas
app.use('api/v1campus', campus);





//establecer el puerto en localhost
const PORT = process.env.PORT || 5000;

//lanzar la app
app.listen( PORT, console.log(`Server corriendo en ${process.env.NODE_ENV} en el puerto ${PORT}`));

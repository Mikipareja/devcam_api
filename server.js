const express = require('express');
const dotenv = require('dotenv');

//leer el archivo de configuracion
dotenv.config({path:'./config/config.env'});

//crear una app a partir de la clase express
c = express();

//especificar el archivo de rutas campus.js
const campus = require('./routes/campus');
const alumnos = require('./routes/alumnos');


//montar (activar) rutas
app.use('api/v1campus', campus);

app.use('/api/v1/', alumnos)



//establecer el puerto en localhost
const PORT = process.env.PORT || 5000;

//lanzar la app
app.listen( PORT, console.log(`Server corriendo en ${process.env.NODE_ENV} en el puerto ${PORT}`));

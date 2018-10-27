/**
Desarrolle un programa en Node.js donde la primer versión del API regresa el id y nombre del empleado.
La segunda versión del API, regresará id, nombre y apellido.
Cada versión del API Empleados tendrá su propia ruta en el URL.
Utilice el siguiente ejemplo como apoyo.
**/

// Request packages
var bodyParser = require("body-parser");
var express = require("express");

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// Declare an array of JSON objects
const employees1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" }
];

const employees2 = [
  { id: 1, name: "John", lastname: "Cena" },
  { id: 2, name: "Peter", lastname: "Griffin" }
];

// Route to employees v1
app.get('/v1/employees', function(req, res) {
  // Print JSON array
  res.json( { employees1 } );
});

// Route to employees v2
app.get('/v2/employees', function(req, res) {
  // Print JSON array
  res.json( { employees2 } );
});

var PORT = process.env.port || 3000;

app.listen(PORT, function() {
  console.log(`App running in port ${PORT}`);
});

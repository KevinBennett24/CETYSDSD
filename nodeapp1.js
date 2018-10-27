// Parse body in API call
var bodyParser = require("body-parser");
var express = require("express");

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/v1/helloworld', function(req, res) {
 res.json( { message: 'Hello World!' } );
});

app.get('/v2/helloworld2', function(req, res) {
 res.json( { message: 'Hello World2!' } );
});

var PORT = process.env.port || 3000;

app.listen(PORT, function() {
 console.log(`App running in port ${PORT}`);
});

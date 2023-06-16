var express = require('express');
var app = express();
let cors = require('cors');
const bodyparser= require('body-parser');
var PORT=3000;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(require('./routes/correoRoutes'))
app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

app.listen(PORT, function() {
  console.log('Servidor corriendo puerto '+PORT);
});

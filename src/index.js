const express = require("express");
const app = express();
const path = require('path');
//const indexRoute = require('./routes/index');

//settings

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); //requiero que se use la extension ejs
app.set('view engine', 'ejs');

//middlewares


//routes = seccion de rutas
app.use(require('./routes/index'));

//static files 
app.use(express.static(path.join(__dirname, 'public')));

//listening the server


app.listen(3000,() => {

    console.log('Server on port', app.get('port'));

});
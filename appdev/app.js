const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/routes');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);

app.listen(3000, ()=> {
    console.log('server started at http://localhost:3000');    

});
const expression = require('express');
const express = require('express');
const nodejs = require('../controllers/NodeJsController'); 
const routes = express.Router();

routes.get('/', nodejs.index);
routes.post('/save', nodejs.save);
routes.get('/information', nodejs.information);


module.exports = routes;
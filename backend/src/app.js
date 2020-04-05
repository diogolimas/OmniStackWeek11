const express = require('express');
const cors = require('cors'); 
const {erros} = require('celebrate');
const app = express();

const routes = require('./routes');
app.use(cors());

app.use(express.json());

app.use(routes);

module.exports = app;
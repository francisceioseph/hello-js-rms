const express = require('express');
const bodyParser = require('body-parser');
const knexfile = require('./knexfile')['development'];

const knex = require('knex')(knexfile);
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Habilitando CORS no nosso servidor.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configurando Rotas

// CRUD de Sala
app.get('/rooms', (request, response) => {

});

app.get('/rooms/:room_id', (request, response) => {

});

app.post('/rooms/new', (request, response) => {

});

app.patch('/rooms/:room_id', (request, response) => {

});

app.delete('/rooms/:room_id', (request, response) => {

});

// CRUD de Pessoa
app.get('/person', (request, response) => {

});

app.get('/person/:person_id', (request, response) => {

});

app.post('/person/new', (request, response) => {

});

app.patch('/person/:person_id', (request, response) => {

});

app.delete('/person/:person_id', (request, response) => {

});

// CRUD de Reserva

app.get('/reservation', (request, response) => {

});

app.get('/reservation/:reservation_id', (request, response) => {

});

app.post('/reservation/new', (request, response) => {

});

app.patch('/reservation/:reservation_id', (request, response) => {

});

app.listen(8080);
const express = require('express');
const router  = express.Router();

const roomService = require('../services/roomService');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

router.get('/', (request, response) => {

});

router.get('/:room_id', (request, response) => {

});

router.post('/new', (request, response) => {

});

router.patch('/:room_id', (request, response) => {

});

router.delete('/:room_id', (request, response) => {

});

module.exports = router;
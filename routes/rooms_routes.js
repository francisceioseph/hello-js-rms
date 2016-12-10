const express = require('express');
const router  = express.Router();

const roomService = require('../services/roomService');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

router.get('/', (request, response) => {
  roomService.listAllRooms()
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.get('/:room_id', (request, response) => {
  let room_id = request.params.room_id;

  roomService.getRoomByID(room_id)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.post('/new', (request, response) => {
  let room = request.body;

  roomService.createRoom(room)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.patch('/:room_id', (request, response) => {
  let room = request.body;
  let room_id = request.params.room_id;

  roomService.updateRoom(room_id, room)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.delete('/:room_id', (request, response) => {
  response.send('Unable to delete rooms...');
});

module.exports = router;
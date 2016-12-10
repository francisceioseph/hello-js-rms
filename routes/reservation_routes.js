const express = require('express');
const router  = express.Router();

const reservationService = require('../services/reservationService');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

router.get('/', (request, response) => {
  reservationService.listAllReservations()
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.get('/:reservation_id', (request, response) => {
  let reservation_id = request.params.reservation_id;

  reservationService.getReservationByID(reservation_id)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.get('/between/:start_timestamp/and/:end_timestamp', (request, response) => {

});

router.post('/new', (request, response) => {

});

router.patch('/:reservation_id', (request, response) => {

});

module.exports = router;
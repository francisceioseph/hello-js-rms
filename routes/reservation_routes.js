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
  let start_at = request.params.start_timestamp;
  let end_at = end_timestamp;

  reservationService.getReservationBetween(start_at, end_at)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.post('/new', (request, response) => {
  let newReservation = request.body;

  reservationService.createReservation(newReservation)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.patch('/:reservation_id', (request, response) => {
  let reservation_id = request.params.reservation_id;
  let reservation = request.body;

  reservationService.updateReservation(reservation_id, reservation)
    .then(result => {
      response.send(result);
    })
    .catch (error => {
      response.send(error);
    });
});

router.delete('/:reservation_id', (request, response) => {
  let reservation_id = request.params.reservation_id;

  reservationService.deleteReservation(reservation_id)
    .then(result => {
      response.send('Reservation deleted successfully');
    })
    .catch(error => {
      response.send(error);
    });
})

module.exports = router;
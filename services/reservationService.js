const knexfile = require('../knexfile')[process.env.KNEX_MODE];
const knex = require('knex')(knexfile);

function createReservation(reservation) {
  return knex('reservation').insert(reservation, ['id']);
}

function listAllReservations() {
  return knex('reservation')
    .select()
    .innerJoin('person', 'reservation.person_id', 'person.person_id')
    .innerJoin('room', 'reservation.room_id', 'person.room_id');;
}

function getReservationByID(reservation_id) {
  return knex('reservation')
    .select()
    .where({reservation_id: reservation_id})
    .innerJoin('person', 'reservation.person_id', 'person.person_id')
    .innerJoin('room', 'reservation.room_id', 'person.room_id');
}

function getReservationBetween(start_timestamp, end_timestamp){
  return knex('reservation')
    .select()
    .whereBetween('reservation_start_at', [start_timestamp, end_timestamp])
    .innerJoin('person', 'reservation.person_id', 'person.person_id')
    .innerJoin('room', 'reservation.room_id', 'person.room_id');
}

function updateReservation(reservation_id, reservation) {
  return knex('reservation').update(reservation).where({reservation_id: reservation_id});
}
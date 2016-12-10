const knexfile = require('../knexfile')[process.env.KNEX_MODE];
const knex = require('knex')(knexfile);

function createRoom(room) {
  return knex('room').insert(room, ['room_id', 'room_name']);
}

function getRoomByID(room_id) {
  return knex('room').select().where({room_id: room_id});
}

function listAllRooms(){
  return knex('room').select();
}

function updateRoom(room_id, room) {
  return knex('room').update(room).where({room_id: room_id});
}

function deleteRoom(room_id) {
  return knex.del().where({room_id: room_id});
}

module.exports = {
  createRoom: createRoom,
  getRoomByID: getRoomByID,
  listAllRooms: listAllRooms,
  updateRoom: updateRoom,
  deleteRoom: deleteRoom
};
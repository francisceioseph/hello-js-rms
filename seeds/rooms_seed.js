
exports.seed = function(knex, Promise) {
  return knex('room').del()
    .then(function () {
      return Promise.all([
        knex('room').insert({room_id: 1, room_name: 'LMC 1', room_type: 'LAB'}),
        knex('room').insert({room_id: 2, room_name: 'Hardware', room_type: 'LAB'}),
        knex('room').insert({room_id: 3, room_name: 'BC 21', room_type: 'CLASS'})
      ]);
    });
};

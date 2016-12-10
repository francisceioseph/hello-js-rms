
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reservation').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('reservation').insert({
          reservation_id: 1, 
          reservation_start_at: 1481379200880, 
          reservation_end_at: 1481390429751, 
          person_id: 2, 
          room_id: 1
        }),
        knex('reservation').insert({
          reservation_id: 2, 
          reservation_start_at: 1481382833511, 
          reservation_end_at: 1481386801214, 
          person_id: 1, 
          room_id: 2
        }),
        knex('reservation').insert({
          reservation_id: 3, 
          reservation_start_at: 1481393651039, 
          reservation_end_at: 1481397266512, 
          person_id: 3, 
          room_id: 3
        })
      ]);
    });
};

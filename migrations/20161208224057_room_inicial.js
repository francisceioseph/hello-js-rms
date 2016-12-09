
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('room', table => {
      table.increments('room_id');

      table.string('room_name').notNullable();
      table.string('room_type').notNullable();
      table.string('room_description');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('room');
};


exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('reservation', table => {
      table.increments('reservation_id');

      table.timestamp('reservation_created_at').defaultTo(knex.fn.now());
      table.timestamp('reservation_start_at').notNullable();
      table.timestamp('reservation_end_at');

      table.integer('person_id').unsigned().notNullable();
      table.integer('room_id').unsigned().notNullable();

      table.foreign('person_id').references('person.person_id');
      table.foreign('room_id').references('room.room_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reservation');
}


exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('person', table => {
    table.increments('person_id').unsigned().primary();
    table.string('person_name').notNullable();
    table.string('person_telefone');
    table.string('person_email');
    table.timestamp('person_created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('person');
};


exports.up = function(knex, Promise) {
  return knex.schema.table('reservation', table => table.string('reservation_status').defaultTo('ACTIVE'));
};

exports.down = function(knex, Promise) {
  return knex.schema.table("reservation", table => table.dropColumn("reservation_status"));
};

const knexfile = require('./knexfile')[process.env.KNEX_MODE];
const knex = require('knex')(knexfile);

function createPerson(person) {
  return knex('person').insert(person, ['person_id', 'person_name']);
}

function listPeople() {
  return knex('person').select(['person_id', 'person_name']);
}

function getPersonByID(person_id) {
  return knex('person').select().where({person_id: person_id});
}

function getPersonByName(name) {
  return knex('person').select().where('person_name', 'like', `%${name}%`);
}

function updatePerson(person_id, person) {
  return knex('person').update(person).where({person_id: person_id});
}

function deletePerson(person_id) {
  return knex('person').del().where({person_id: person_id});
}

module.exports = {
  createPerson: createPerson,
  listPeople: listPeople,
  getPersonByID: getPersonByID,
  getPersonByName: getPersonByName,
  updatePerson: updatePerson,
  deletePerson: deletePerson
};
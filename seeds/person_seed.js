
exports.seed = function(knex, Promise) {
  return knex('person').del()
    .then(function () {
      return Promise.all([
        knex('person').insert({
          person_id: 1, 
          person_name: 'Francis', 
          person_telefone: '+55 99 98653300', 
          person_email: 'francis@fakemail.com'}),
        knex('person').insert({
          person_id: 2, 
          person_name: 'John', 
          person_telefone: '+55 88 89432071', 
          person_email: 'john@fakemail.com'}),
        knex('person').insert({
          person_id: 3, 
          person_name: 'Bennie', 
          person_telefone: '+55 33 8756 2323', 
          person_email: 'bennie@fakemail.com'}) 
      ]);
    });
};

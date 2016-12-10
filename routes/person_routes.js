const express = require('express');
const router  = express.Router();

const personService = require('../services/personService');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// CRUD de Pessoa
router.get('/', (request, response) => {
  personService.listPeople()
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.get('/:person_id', (request, response) => {
  let person_id = request.params.person_id;

  personService.getPersonByID(person_id)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.get('/by_name/:name', (request, response) => {
  let person_name = request.params.name;

  personService.getPersonByName(person_name)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.post('/new', (request, response) => {
  let new_person = request.body;

  personService.createPerson(new_person)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.patch('/:person_id', (request, response) => {
  let person_id = request.params.person_id;
  let person = request.body;

  personService.updatePerson(person_id, person)
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.send(error);
    });
});

router.delete('/:person_id', (request, response) => {
  response.send('Unable to delete anithing yet...');
}); 

module.exports = router;
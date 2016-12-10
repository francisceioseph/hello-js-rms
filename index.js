const express = require('express');
const app = express();

const cors = require('./routes/cors');
const person_routes = require('./routes/person_routes');
const reservation_routes = require('./routes/reservation_routes');
const rooms_routes = require('./routes/rooms_routes');

app.use(cors);

app.use('/people', person_routes);
app.use('/reservations', reservation_routes);
app.use('/rooms', rooms_routes);

app.listen(8080);
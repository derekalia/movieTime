var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const handler = require('./requestHandler');
var cors = require('cors')

var app = express()

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/ratings')

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/rating', handler.getRating);

app.post('/rating', handler.addRating);

app.get('/movies', handler.getMovies);

app.get('/moviesOIMDB/:title', handler.titleGet);

app.listen(3000, () => console.log('listening on port 3000'));
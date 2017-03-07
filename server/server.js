var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const handler = require('./requestHandler');


var app = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movies')

app.use(bodyParser.json());


app.use(express.static(__dirname + '/../public'));

app.get('/movies', handler.getMovies);
app.post('/movies', handler.postMovie);

app.get('/moviesOIMDB', handler.titleGet);


app.listen(3000, () => console.log('listening on port 3000'));
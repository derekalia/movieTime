const Movies = require('./model/movies.js');



exports.getMovies = function (req, res) {
    Movies.find()
        .then(movies => res.send(movies))
};

exports.postMovie = function (req, res) {
    var payload = req.body;
    var movie = new Movies({
        title: payload.title,
        year: payload.year,
        poster: payload.poster,
        trailer: payload.trailer,
        description: payload.description,
        favorite: payload.favorite
    })
    //save that object
    movie.save()
        .then(movie => res.send(movie));
};

exports.titleGet = function(req, res){

}
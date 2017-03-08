const Ratings = require('./model/rating.js');
const Movies = require('./model/movies.js');
const axios = require('axios');


exports.getRating = function (req, res) {
    Ratings.find()
        .then(ratings => res.send(ratings))
};

exports.getMovies = function (req, res) {
    Movies.find()
        .then(movies => {            
            res.send(movies)            
        })
};

exports.addRating = function (req, res) {
    var payload = req.body;
    var rating = new Ratings({
        rating: payload.rating,
        movie: payload.movie,
        comment: payload.comment,
    })
    //save that object
    rating.save()
        .then(rating => res.send(rating));
};

exports.titleGet = function (req, res) {
    var title = req.params.title.toUpperCase()
    Movies.where({ title: title }).findOne(function (err, titleData) {
        if (titleData === null) {
            console.log("check title", err)
            axios.get(`http://www.omdbapi.com/?t=${title}`)
                .then((res) => {
                    var movie = new Movies({
                        title: res.data.Title.toUpperCase(),
                        year: res.data.Released,
                        info: res.data.Plot,
                        imdbID: res.data.imdbID,
                        imdbImage: res.data.Genre
                    })
                    console.log('here ', movie)
                    movie.save()
                        .then(movie => {
                            console.log("here");
                            res.send(movie)
                        })
                })

        } else {
            console.log("its null", title)
        }
    })
}




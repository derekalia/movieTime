const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var movieSchema = new Schema ({
    title: String,
    year: String,
    info: String,
    imdbID: String,
    imdbImage: String
})
 

module.exports = mongoose.model('movie', movieSchema);
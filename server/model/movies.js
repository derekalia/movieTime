const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var movieSchema = new Schema ({
    title: String,
    year: String,
    poster: String,
    trailer: String,
    description: String,
    favorite: {type: Boolean, default: false}
})

module.exports = mongoose.model('movies', movieSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ratingSchema = new Schema ({
    rating: Number, 
    movie: String,
    comment: String,
})


module.exports = mongoose.model('rating', ratingSchema);
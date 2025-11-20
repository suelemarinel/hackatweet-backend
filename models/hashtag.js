const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
    tag: String, // text du htag
    count: Number // nombre de fois htag utilise
});

module.exports = mongoose.model('Hashtag', hashtagSchema);
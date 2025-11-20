const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },//qui a posté le tweet
    content: { type: String, maxlength: 280 },//texte du tweet avec limite
    hashtags: [String],//tableau chain de caracter
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now } // date de création
});

module.exports = mongoose.model('Tweet', tweetSchema);

//ObjectId = pour identifier de maniere unique chaque document(mongoose)
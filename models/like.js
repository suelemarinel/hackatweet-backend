const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // utilisateur qui a like
    tweet: { type: mongoose.Schema.Types.ObjectId, ref: 'Tweet' } // // le tweet liker
});

module.exports = mongoose.model('Like', likeSchema);
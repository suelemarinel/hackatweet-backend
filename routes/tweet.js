var express = require('express');
var router = express.Router();

require('../models/connection');
const Tweet = require('../models/tweet');

// POST un nouveau tweet
router.post('/', (req, res) => {
    if (!req.body.user || !req.body.content) {
        res.json({ result: false, error: "Missing user or content" });
        return;
    }

    const newTweet = new Tweet({
        user: req.body.user,
        content: req.body.content,
        hashtags: req.body.hashtags || [],
        likes: []
    });

    newTweet.save()
        .then(doc => res.json({ result: true, tweet: doc }))
        .catch(err => res.json({ result: false, error: err.message }));
});

// GET tous les tweets
router.get('/', (req, res) => {
    Tweet.find({})
        .then(tweets => res.json({ result: true, tweets: tweets }))
        .catch(err => res.json({ result: false, error: err.message }));
});

module.exports = router;

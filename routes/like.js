var express = require('express');
var router = express.Router();

require('../models/connection');
const Like = require('../models/like');

// POST un like
router.post('/', (req, res) => {
    if (!req.body.user || !req.body.tweet) {
        res.json({ result: false, error: "Missing user or tweet" });
        return;
    }

    const newLike = new Like({
        user: req.body.user,
        tweet: req.body.tweet
    });

    newLike.save()
        .then(doc => res.json({ result: true, like: doc }))
        .catch(err => res.json({ result: false, error: err.message }));
});

// DELETE un like (unlike)
router.delete('/', (req, res) => {
    if (!req.body.user || !req.body.tweet) {
        res.json({ result: false, error: "Missing user or tweet" });
        return;
    }

    Like.deleteOne({ user: req.body.user, tweet: req.body.tweet })
        .then(() => res.json({ result: true, message: "Like removed" }))
        .catch(err => res.json({ result: false, error: err.message }));
});

// GET tous les likes
router.get('/', (req, res) => {
    Like.find({})
        .then(likes => res.json({ result: true, likes: likes }))
        .catch(err => res.json({ result: false, error: err.message }));
});

module.exports = router;
require('dotenv').config();
require('./models/connection');

const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',
    credentials: true
}));
app.use(express.json());

// Import des routes

const tweetRouter = require('./routes/tweet');
const hashtagRouter = require('./routes/hashtag');
const likeRouter = require('./routes/like');
const userRouter = require('./routes/users');

app.use('/tweets', tweetRouter);
app.use('/hashtags', hashtagRouter);
app.use('/likes', likeRouter);


app.use('/users', userRouter);

module.exports = app;
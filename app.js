require('dotenv').config();
require('./models/connection');

const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/users');
app.use('/users', userRouter);

module.exports = app;
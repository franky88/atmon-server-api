const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/usersauth');
const roomsRoutes = require('./routes/rooms');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Database connected successfully!`))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;

// app.use(express.static('public'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/rooms', roomsRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
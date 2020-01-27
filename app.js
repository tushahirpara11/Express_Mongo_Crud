const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/UserRoutes');

const app = express();
const mongoDB = 'mongodb://127.0.0.1/expressDemo';
const hostName = '127.0.0.1';
const port = 3000;

// app.use(express.json());

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(routes);

app.listen(port, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
})
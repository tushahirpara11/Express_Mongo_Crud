const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes/UserRoutes');
const app = express();

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://${process.env.HOSTNAME}:${process.env.PORT}/`);
});
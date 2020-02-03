const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
<<<<<<< HEAD
=======

const routes = require('./routes/UserRoutes');
>>>>>>> d88b67d5b4c55298dfbc3499ee63ac155a9fa571

const routes = require('./routes/UserRoutes');
const app = express();

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://${process.env.HOSTNAME}:${process.env.PORT}/`);
<<<<<<< HEAD
});
=======
})
>>>>>>> d88b67d5b4c55298dfbc3499ee63ac155a9fa571

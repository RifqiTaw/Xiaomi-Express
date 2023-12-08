require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const { notFound, errorHandler } = require('./middlewares/error.middleware');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/api', router);
app.use([notFound, errorHandler]);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running');
});

const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const dayRouter = require('./Routers/dayRouter');
const entryRouter = require('./Routers/entryRouter');
const userRouter = require('./Routers/userRouter');
const foodsearchRouter = require('./Routers/foodSearchRouter');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
  app.use(morgan('tiny'));
}

app.use(compression());

app.use(helmet());

app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, 'build')));

// controller routing
app.use('/api/days', dayRouter);
app.use('/api/entries', entryRouter);
app.use('/api/users', userRouter);
app.use('/api/foodsearch', foodsearchRouter);

// for unhandled requests, serve index.html
// client-side routing will display the correct content or a 404 page
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;

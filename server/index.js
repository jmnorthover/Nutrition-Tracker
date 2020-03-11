const mongoose = require('mongoose');
const app = require('./app');
const { mongoURI, port } = require('./Config/keys');

mongoose.set('useCreateIndex', true);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log('Application started');
});

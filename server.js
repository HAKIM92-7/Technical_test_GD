const express = require('express');
const app = express();
const Port = process.env.PORT || 5000;
const connectDB = require('./database/connect');
const path = require ('path');

app.use(express.json({ extended: false }));

connectDB();

app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(Port, (err) => {
  if (err) console.log('server not running');
  else console.log(`sever running at ${Port}`);
});
const express = require('express');
const app = express();
// const gameController = require('./controller/gameController.js');
const PORT = process.env.PORT;
// const db = require('./db-models/db-models');

const game = require(path.join(__dirname, 'replay-testing/main.js'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const usersRouter = require('./routes/users.js');

// app.use('/users', usersRouter);

app.get('/', function (req, res, next) {
  res.status(200).json(JSON.stringify(game));
});

app.get('*', function (req, res) {
  res.sendStatus(404);
});

app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error', // goes to server
    status: 400,
    message: { err: 'An error occurred' }, // goes to client
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log); // goes to client
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

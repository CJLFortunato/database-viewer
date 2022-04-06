const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const data = require('./data').data;

const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);



app.get('/', db.getPeople);

app.delete('/:id', db.deletePerson);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
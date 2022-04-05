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

db.populatePeople(data);

app.get('/', db.getPeople);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
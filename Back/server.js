const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const data = require('./data').data;

const app = express();
const port = 3000;
const db = require('./queries');
const cors = require('cors');

app.use(bodyParser.json(), cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

db.getTableDetails();


app.get('/', db.getPeople);
app.post('/', db.createPerson);
app.put('/', db.updatePerson);
app.delete('/:id', db.deletePerson);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
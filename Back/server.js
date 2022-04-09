const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const data = require('./data').data;

const app = express();
const port = process.env.PORT || 3000;
const db = require('./queries');
const cors = require('cors');
const serveStatic = require('serve-static');


app.use(bodyParser.json(), cors(), serveStatic(__dirname + "/dist/"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//db.getTableDetails();


app.get('/', db.getPeople);
app.post('/', db.createPerson);
app.put('/', db.updatePerson);
app.delete('/:id', db.deletePerson);
app.post('/filter', db.getFilteredData);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
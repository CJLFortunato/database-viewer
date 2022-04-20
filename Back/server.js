const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const db = require('./queries');
const cors = require('cors');
//const serveStatic = require('serve-static');

//app.set("view engine", "html");

app.use(bodyParser.json(), cors());
app.use('/', express.static('dist', 'fun-with-databases'));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/fun-with-databases/'}
);
});
//db.getTableDetails();

// app.get('/', (request, response) => {
//   response.send("test");
// })
app.get('/people', db.getPeople);
app.post('/people', db.createPerson);
app.put('/people', db.updatePerson);
app.delete('/people/:id', db.deletePerson);
app.post('/people/filter', db.getFilteredData);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
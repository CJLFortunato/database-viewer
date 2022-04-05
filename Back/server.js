const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.get('/', (req, res) => {
    const data = db.getPeople(req, res);

    if (!data) {
        res.status(404).send();
    }
    res.status(200).send(data.json());
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });
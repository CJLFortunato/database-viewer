const pool = require('./config');
const {
  v4: uuidv4
} = require('uuid');

const populatePeople = (arr) => {
  console.log('function started');


  for (const person of arr) {

    let id = uuidv4();

    pool.query(
      "INSERT INTO people(id, first_name, last_name, gender, age, major, occupation, location)VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
      [id, person.firstname, person.lastname, person.gender, person.age, person.major, person.occupation, person.location],
      (err, res) => {
        console.log(err, res);

      }
    );
  }

}

const getPeople = (request, response) => {
    pool.query('SELECT * FROM people', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };







const createPerson = (request, response) => { 


  const {
    first_name,
    last_name,
    gender,
    age,
    major,
    occupation,
    location
  } = request.body
  const id = uuidv4();

  pool.query("INSERT INTO people(id, first_name, last_name, gender, age, major, occupation, location)VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
  [id, first_name, last_name, gender, parseInt(age), major, occupation, location], (error, results) => {
    if (error) {
      
      throw error
    }
    
    response.status(201).send(results.rows);
    
  })
}

const deletePerson = (request, response) => {
  const id = request.params.id;

  pool.query('DELETE FROM people WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }

    response.status(200).send({
      id
    });
  });
};


module.exports = {
  populatePeople,
  getPeople,
  createPerson,
  deletePerson
};

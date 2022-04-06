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
  

  if (request.query) {
    const firstname = request.query.firstname;
    const lastname = request.query.lastname;
    const gender = request.query.gender;
    const age = request.query.age;
    const major = request.query.major;
    const occupation = request.query.occupation;
    const location = request.query.location;
    console.log("Filter made it to backend");
    

    pool.query('SELECT * FROM people WHERE first_name=$1 AND last_name=$2 AND gender=$3 AND age= $4 AND major=$5 AND occupation=$6 AND location=$7;',
      [firstname, lastname, gender, age, major, occupation, location],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
        console.log("Filter SQL query didn't throw an error");
      })

  } else {

    pool.query('SELECT * FROM people', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }



}



const createPerson = (request, response) => { //TODO
  const {
    name,
    email
  } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
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

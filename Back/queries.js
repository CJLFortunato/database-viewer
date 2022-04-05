const pool = require('./config');
const { v4: uuidv4 } = require('uuid');

const populatePeople = (arr) => {
    console.log('function started');
    let id = 0;
    
    // for (const person of arr) {
    //     console.log('loop started');
    //     id++;
    //     console.log('id generated');
         pool.query(
            "INSERT INTO people(id, first_name, last_name, gender, age, major, occupation, location)VALUES('456', 'Maja', 'Pedersen', 'Female', 18, 'Veterinary Studies', 'Student', 'Rhemes')",
            (err, res) => {
              console.log(err, res);
             
            }
          );
    //       console.log('query sent');
    // }
    
    console.log('function finished');
}

const getPeople = (request, response) => {
    pool.query('SELECT * FROM people', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


module.exports = {
    populatePeople,
    getPeople
};
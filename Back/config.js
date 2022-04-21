// const Pool = require('pg').Pool;

// const connexionString = process.env.DATABASE_URL;

// console.log(connexionString);

// const pool = new Pool({
//   connexionString: connexionString,
//   ssl: {
//     required: true,
//     rejectUnauthorized: false,
//   }
// });

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});




module.exports = client;
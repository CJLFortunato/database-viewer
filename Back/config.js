const Pool = require('pg').Pool;

const connexionString = process.env.DATABASE_URL + '&sslmode=require';

console.log(connexionString);

const pool = new Pool({
  connexionString: connexionString,
  ssl: {
    rejectUnauthorized: false,
  }
});


module.exports = pool;
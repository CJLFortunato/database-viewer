const Pool = require('pg').Pool;

const connexionString = process.env.DATABASE_URL;

console.log(connexionString);

const pool = new Pool({
  connexionString: connexionString,
  ssl: {
    required: true,
    rejectUnauthorized: false,
  }
});


module.exports = pool;
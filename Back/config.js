const Pool = require('pg').Pool;


const pool = new Pool({
  connexionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }
});


module.exports = pool;
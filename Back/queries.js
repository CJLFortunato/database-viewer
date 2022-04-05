const pool = require('./config');

const getPeople = (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return false;
        }
        return results.rows;
    });
};


module.exports = {
    getPeople
};
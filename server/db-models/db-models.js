const { Pool } = require('pg');

const DB_URI = process.env.DB_URI;

const pool = new Pool({
  connectionString: DB_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

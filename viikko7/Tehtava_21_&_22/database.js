const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test_user2',
  password: 'abcd',
  database: 'testdb2'
});
module.exports = connection;
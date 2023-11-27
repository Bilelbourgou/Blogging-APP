const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'YOUR_USERNAME_HERE',
  password: 'YOUR_PASSWORD_HERE',
  database: 'YOUR_DATABASE_NAME_HERE'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!





// Don't forget to export your functions!
module.exports = {

};

const mysql = require('mysql2');

const db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appdev'

});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
});

module.exports = db;
const mysql = require('mysql');

const mydb = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345',
	database: 'mydb'
});

module.exports = mydb;
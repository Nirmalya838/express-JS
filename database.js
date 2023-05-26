const { createPool } = require('mysql2');
const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'node-complete',
    password : 'Javascript@321'
});

module.exports = pool.promise();
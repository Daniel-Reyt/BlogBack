const { query } = require("express");

const mySql = require('mysql');

console.log('Get connection ...');
 
var conn = mySql.createConnection({
  database: 'blogDB',
  host: "localhost",
  user: "root",
  password: ""
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.getAll = (req, res, next) => {
    console.log('get All user reçu')
    conn.query('SELECT * FROM user', function (err, result, fields) {
        res.send(result);
      });
}
exports.create = (req, res, next) => {
    console.log('create user reçu');

    let username = req.body.usernameE;
    let password = req.body.passwordE;

    let data = [username, password];

    conn.query('INSERT INTO user (username, password) VALUES (?, ?)', data, function (err, result, fields) {
        res.send('utilisateur créer');
      });
}
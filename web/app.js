var mysql = require('mysql2');



var con = mysql.createConnection({
  //host: "10.127.10.42",
  host: "127.0.0.1",
  user: "test",
  password: "test",
  database: "test"
});

console.log("hede");

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

var mysql = require('mysql2');



var con = mysql.createConnection({
  host: "192.168.1.125",
  user: "test",
  password: "test",
  database: "test"
});



con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

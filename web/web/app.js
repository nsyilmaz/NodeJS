const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "xxxxx",
  user: process.env.MYSQL_USER || "xxxxx",
  password: process.env.MYSQL_PASSWORD || "xxxxx",
  database: process.env.MYSQL_DATABASE || "xxxxx",
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM Student", (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      res.json({
        success: true,
        rows,
      });
    }
  });
});

app.listen(5000, () => console.log("listining on port 5000"));

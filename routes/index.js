var express = require('express');
var router = express.Router();
var app = express();
const path = require('path');

//Port Configuration
var PORT = process.env.PORT || 5000


// DB configuration
const sqlite3 = require("sqlite3").verbose();
const dbPath  = path.resolve(__dirname, 'golist.db')
const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'golist.db'");
});
// SERVER CONFIGURATION
//Setting up EJS directories
app.set('views', './views');
app.set('view engine', 'ejs');

      //Static Directory
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.render("index.ejs", { title: "Go List"});
});

app.listen(PORT);
console.log(`Server Started on PORT ${PORT} `)

//DB Commands
const sqlCreate = `CREATE TABLE IF NOT EXISTS List (
  SN INTEGER PRIMARY KEY AUTOINCREMENT,
  Product VARCHAR(50) NOT NULL,
  Price INTEGER NOT NULL
);`

//Creating a DB Table
db.run(sqlCreate, err => {
  if (err) {
    return console.error(err.message)
  }
  console.log("Successful creation of List table")
})
module.exports = router;

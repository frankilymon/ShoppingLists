var express = require('express');
var router = express.Router();
var app = express();
var PORT = process.env.PORT || 5000
// DB configuration
const path = require('path');
const { title } = require('process');
const sqlite3 = require("sqlite3").verbose();
const dbPath  = path.resolve(__dirname, 'golist.db')
const db = new sqlite3.Database(dbPath, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'golist.db'");
});

const sqlCreate = `CREATE TABLE IF NOT EXISTS List (
  SN INTEGER PRIMARY KEY AUTOINCREMENT,
  Product VARCHAR(50) NOT NULL,
  Price INTEGER NOT NULL
);`

db.run(sqlCreate, err => {
  if (err) {
    return console.error(err.message)
  }
  console.log("Successful creation of List table")
})

// Server configuration
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
  res.render("index.ejs", {title: "GoList"});
});

app.listen(PORT);
console.log(`Server Started on PORT ${PORT} `)
module.exports = router;

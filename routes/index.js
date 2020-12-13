var express = require('express');
var router = express.Router();
var app = express();

const path = require('path');

//Rendering
app.use(express.static(path.join(__dirname, 'public')))

/* GET home page. */

app.set('view engine', 'ejs');
module.exports = router;

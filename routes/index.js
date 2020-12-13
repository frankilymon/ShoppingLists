var express = require('express');
var router = express.Router();
const app = express();
//const db = require('better-sqlite3')

const PORT = process.env.PORT || 5000;

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shopping List' });
}); */
app.get('/', (req, res) => {
  res.send('<h1>Shopping List</h1>')
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`))

module.exports = router;

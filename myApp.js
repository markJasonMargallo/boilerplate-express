let express = require('express');
let bodyParser = require('body-parser')
let app = express();
require('dotenv').config();

app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  console.log(req.method + " " + req.url + " - " + req.ip)
  next()
})

console.log(__dirname + '/public')

app.get('/json', (req, res) => {

  const message = "Hello json"
  const messageStyle = process.env.MESSAGE_STYLE
  const modifiedMessage = messageStyle === "uppercase" ? message.toUpperCase() : message

  res.json({ message: modifiedMessage })

})

app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word })
})

app.route('/name')
.get((req, res) => {
  const fullName = req.query.first+" "+req.query.last
  res.json({name: fullName})
})
.post((req, res) => {
  const fullName = req.body.first+" "+req.body.last
  res.json({name: fullName})
})

app.get('/now', function (req, res, next) {
  req.time = new Date().toString()
  next();
}, function (req, res) {
  res.json({ time: req.time })
});

app.get('/', (req, res) => {
  file = __dirname + '/views/index.html'
  res.sendFile(file)
})




































module.exports = app;

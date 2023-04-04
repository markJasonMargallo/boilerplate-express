let express = require('express');
let app = express();
require('dotenv').config();

app.use('/public', express.static(__dirname + '/public'))

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

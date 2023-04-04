let express = require('express');
let app = express();
require('dotenv').config();

app.use('/public', express.static(__dirname+'/public'))

console.log(__dirname+'/public')

app.get('/json', (req, res) => {
  
  const message = "Hello json"
  const messageStyle = process.env.MESSAGE_STYLE
  const modifiedMessage = messageStyle === 'uppercase'? message.toUpperCase() : message
  
  res.json({message: modifiedMessage})

  })

app.get('/', (req, res) => {
    file = __dirname + '/views/index.html'
    res.sendFile(file)
  })



































 module.exports = app;

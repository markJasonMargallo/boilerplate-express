let express = require('express');
let app = express();

app.use('/public', express.static(__dirname+'/public'))

console.log(__dirname+'/public')

app.get('/json', (req, res) => {
    res.json({message: "Hello json"})
  })

app.get('/', (req, res) => {
    file = __dirname + '/views/index.html'
    res.sendFile(file)
  })



































 module.exports = app;

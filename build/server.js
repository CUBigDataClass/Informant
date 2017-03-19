var express = require('express')
var app = express()

app.use(express.static('.'))

app.get('/', function (req, res) {
  console.log("Hello World!")
//  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

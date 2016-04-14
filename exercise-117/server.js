var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/user', function(req, res) {
  var user = {name: 'Justin'};
  res.json(user);
})

app.listen(8080);

var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/user', function(req, res) {
  var user = {name: 'Justin'};
  res.json(user);
})

app.get('/todo/:user', function(req, res) {
  if(req.params.user == 'Justin') {
    var todos = ['Eat', 'Chill'];
    res.send(todos);
  }
  else res.sendStatus(404);
})

app.listen(8080);

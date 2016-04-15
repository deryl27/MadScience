var express = require('express');

var app = express();

app.use( express.static(__dirname) );

app.get('/mad', function(req, res) {
  return res.sendFile(__dirname + '/index.html');
});

app.listen(4034);
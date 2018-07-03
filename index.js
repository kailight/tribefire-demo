var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('This site was hax3d by russian hax0rz!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
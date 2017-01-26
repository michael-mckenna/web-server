var express = require('express');
var app = express();
var PORT = 3000
var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function(req, res, next) {
    console.log(req.method + ' ' + req.originalUrl);
    next();
  }
};

app.use(middleware.logger);

//root url
// app.get('/', function (req, res) {
//   res.send('Hello Express!');
// });

// About Us route
app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('dope');
});

app.use(express.static(__dirname + '/public')); //static gets the folder you want to expose

//port 3000 usually not reserved
app.listen(PORT, function () {
  console.log('Listenting on port ' + PORT);
});

const express = require('express');
const router = express.Router();
const app = express();
const mongodb = require('mongodb');
const cors = require('cors');

// set PORT of the application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;



// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

//set the home page route
app.get('/', function(req, res){

  // ejs render automatically looks in the views folder
  res.render('index');
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});

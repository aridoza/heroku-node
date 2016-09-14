const mongodb = require('mongodb');
const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb://localhost:27017/ProductsAlpha';
const app = express();

// set PORT of the application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/'));

//set the home page route
app.get('/', function(req, res){

  // ejs render automatically looks in the views folder
  res.render('index');
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});

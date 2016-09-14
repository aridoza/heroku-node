const express = require('express');
const app = express();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../app/containers/App';

// set PORT of the application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;



// set the view engine to ejs
// app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

//set the home page route
app.get('/', function(req, res){

  // ejs render automatically looks in the views folder
  res.render('index');
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});


// ReactDOM.render(
//   <App />,
//   document.getElementById('scotchy-app')
// );

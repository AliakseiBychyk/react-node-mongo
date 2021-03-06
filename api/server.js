var express = require('express'); // call express
var app = express();              // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');

var data = require('./data');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/local');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080; // set our port

// ROUTS FOR OUR API
// =================================================================
var router = express.Router();    // get an instance of the express Router

// test router to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
  res.json(data);
});

router.get('/:id', function (req, res) {
  res.json(data.posts[req.params.id]);
});

// more routes for our API will happen here

// REGISTER OUR ROUTES ------------------------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// ====================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

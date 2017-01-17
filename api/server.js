const express = require('express'); // call express
const app = express();              // define our app using express
const bodyParser = require('body-parser');
const cors = require('cors');

const data = require('./data');

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/local');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080; // set our port

// ROUTS FOR OUR API
// =================================================================
const router = express.Router();    // get an instance of the express Router

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

var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 
const cors = require('cors');

app.configure(function () {
  app.use(cors());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});



app.get('/', function(req, res) {
  res.send("API");
});

routes = require('./routes/todos')(app);

mongoose.connect('mongodb://localhost/todos', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

server.listen(3001, function() {
  console.log("Node server running");
});


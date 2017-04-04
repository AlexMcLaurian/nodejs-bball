var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index', {player: null});
  console.log(request.body);
});

var num = 3;
var play = "Kevin Durant";

app.post('/search', function(request, response) {
	console.log(request.body)
	response.render('pages/search', 
		{songs: num,
		player: request.body.player}
	);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const users = {}; 
let game;
let gameIdCounter = 0;

// Create path for /views and /public directories 
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

http.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/change', (req, res) => {
  var cp = require('child_process');
  var ls = cp.spawn('ls', ['-lsa']);
  var dataOut = "";

  ls.stdout.on('data', function(data) {
    console.log('Message: ' + data);
    dataOut = data;
  });

  ls.on('close', function(code, signal) {
    console.log('ls finished...');
    console.log('data out was: ' + dataOut);
  });

  res.render('index', {
    user: req.user,
    data: '<a> test data </a>',
  });
  
  console.log('we called this function');
  console.log('dataOut: ' + dataOut);
});




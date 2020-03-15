const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

const users = {};
let game;
let gameIdCounter = 0;


app.use(express.static(__dirname + '/public'));

http.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

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

app.post('/change',function(req,res){

    // the message being sent back will be saved in a localSession variable
    // send back a couple list items to be added to the DOM
    res.send({success: true, message: '<li>New list item number 1</li><li>New list item number 2</li>'});
});


  
    /*
    * handle leave game request
    */
    /*
    socket.on('leave', function() {
      if(users[socket.id].inGame !== null) {
        leaveGame(socket);

        socket.join('waiting room');
        joinWaitingPlayers();
      }
    });

    socket.on('pass-turn', function(data) {
      var currentPlayerIndex;
      var opponentIndex;

      var opponent;

      opponent = game.getOpponent(data.data.player1Id).id;
                 console.log(game.getOpponent(data.data.player1Id).index);

      if (opponent === data.data.player1Id) {
        opponent = game.getOpponent(opponent).id;
      }

      socket.broadcast.to(opponent).emit('update', {
        message: 'turn was passed to you...',
        action: 'hasTurn'
      });

      io.to(data.data.player1Id).emit('update', {
        message: 'not your turn anymore',
        action: 'freeze'
      });
      */
      /*
      currentPlayerIndex = game.getCurrentPlayer().index;
      opponentIndex = game.getOpponent().index;

      //Update the player object
      game.players[currentPlayerIndex] = data.data.player1;
      game.players[opponentIndex] = data.data.player2;

      for(let i = 0; i < game.players[currentPlayerIndex].cardsInPlay.length; i++) {

        game.players[currentPlayerIndex].cardsInPlay[i].hasAttacked = false;
      }

      io.to(game.getOpponent().id).emit('update', {
        message: 'turn was passed to you...',
        action: 'hasTurn'
      });

      io.to(game.currentPlayer).emit('update', {
        message: 'not your turn anymore',
        action: 'freeze'
      });
      */

      //game.changePlayerTurn();
      //startTurn();

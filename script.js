//http://stackoverflow.com/questions/13756482/create-copy-of-multi-dimensional-array-not-reference-javascript

ConnectFourArray = function() {

// multi-dimensional array model for a connect four game. A board is generally 7 columns with 6 rows.
// 0 will represent spots that has not been used by players before. A red or black will represent the players.
const GameEngine = {}
 var player1 = {
   locationX = 0,
   locationY = 0,
   height: 50,
   width: 50,
   backgroundColor: "Red",
   gamePieceX: [],
   gamePieceY: [],
 };
 var player2 = {
   locationX = 0,
   locationY = 0,
   height: 50,
   width: 50,
   backgroundColor: "Blue",
   gamePieceX: [],
   gamePieceY: [],
 };

 var board =
  [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
  ];

  var Row = board.length;
  var column = pattern[0].length;

 var playerA = new Object(player1);
 var playerb = new Object(player2);


   drawmsg = "This game is a draw!",
   winmsg = "The winner is: ",
   currentPlayermsg = "Current Player is: ",
 }


document.addEventListener("click", moving.)

//http://stackoverflow.com/questions/13756482/create-copy-of-multi-dimensional-array-not-reference-javascript

ConnectFourArray = function() {

// multi-dimensional array model for a connect four game. A board is generally 7 columns with 6 rows.
// 0 will represent spots that has not been used by players before. A red or black will represent the players.
const GameEngine = {
  gameover: "false",
  player1: "Red",
  board:
    [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
    ],

 player1: {
   locationX: 0,
   locationY: 0,
   height: 50,
   width: 50,
   bgColor: "Red",
   gamePieceX: [],
   gamePieceY: [],
 },
 player2: {
   locationX: 0,
   locationY: 0,
   height: 50,
   width: 50,
   bgColor: "Blue",
   gamePieceX: [],
   gamePieceY: [],
 },
  // var Row = board.length;
  // var Column = board[0].length;
  resetGame: function(){
    this.board =   [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
      ];
    var currentPlayer = player1;
    this.gameOver = "false";
  },

  toggleCurrentPlayer: function(){
    if (this.currentPlayer === "player1") {
      this.currentPlayer = "player2";
    } else {
      this.currentPlayer = "player1";
    }
  },

render: function(){
  document.getElementById('board').innerHTML= GameEngine.board;
  for (i=0; i<GameEngine.board.length;i++) {
    var row = document.getElementById('row');
    for (j-0; j <GameEngine.board[0].length; j++) {
      var column = document.getElementById('column')
    }
  }
},

printBoard: function(){
  for(var i=0; i< GameEngine.board.length; i++)
   {
     var output="";
      for (var j=0; j <GameEngine.board[0].length; j++)
    {
      if (board[i][j] === 1) {
        output +=  "Red";
      } else if (board[i][j] === 2) {
          output +=  "Blue";
      } else {
        output += "white";
      }
    }
    return output;
    }
},
checkForVictory: function(){
  //vertical victory
  for (var i = 0; i < 3; i++)
  {
    for (var j = 0; j<7; j++)
    {
      if (board[i][j] != 0 &&
      board[i][j] === board[i+1][j] &&
      board[i][j] === board[i+2][j] &&
      board[i][j] === board[i+3][j]){
        return board[i][j] + "is the winner";
      }
    }
  }
  //horizontal victory
  for (var i = 0; i < 6; i++){
    for (var j = 0; j<4; j++){
      if (board[i][j] != 0 &&
      board[i][j] === board[i][j+1] &&
      board[i][j] === board[i][j+2] &&
      board[i][j] === board[i][j+3]){
        return board[i][j] + "is the winner";
      }
    }
  }
  //diagonal victory - right and down
  for (var i = 0; i < 3; i++){
    for (var j = 0; j<4; j++){
      if (board[i][j] != 0 &&
      board[i][j] === board[i+1][j+1] &&
      board[i][j] === board[i+2][j+2] &&
      board[i][j] === board[i+3][j+3]){
        return board[i][j] + "is the winner";
      }
    }
  }
  //diagonal victory - right and up
  for (var i = 3; i >=0; i--){
    for (var j = 0; j<7; j++){
      if (board[i][j] != 0 &&
      board[i][j] === board[i-1][j+1] &&
      board[i][j] === board[i-2][j+2] &&
      board[i][j] === board[i-3][j+3]){
        return board[i][j] + "is the winner";
      }
    }
  }
},

}
window.printBoard = printBoard;
}



//       var piece = document.createElement("div");
//       piece.setAttribute("class","piece");
//       stage.appendChild(piece);
//       if(board[i][j]===3)
//       {
//           cell.style.backgroundColor="white";
//       }
// //player 1 is 1 and player 2 is 2.
//       if(board[i][j]===1)
//       {
//           piece.style.backgroundColor = player1.bgColor;
//       }
//       if(pattern[i]===2)
//       {
//         piece.style.backgroundColor = player2.bgColor;
//       }
//     piece.style.top = i * pieceSize + "px";
//     piece.style.top = j * pieceSize + "px";


// Top Level App Control //
// document.addEventListener("click", moving.)

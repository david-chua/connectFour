//http://stackoverflow.com/questions/13756482/create-copy-of-multi-dimensional-array-not-reference-javascript

ConnectFourArray = function() {

// multi-dimensional array model for a connect four game. A board is generally 7 columns with 6 rows.
// 0 will represent spots that has not been used by players before. A red or black will represent the players.
const GameEngine = {
  gameover: "false",
  player: "Red",
  board: [[],[],[],[],[],[],[]],

  resetGame: function(){
    this.board = [[],[],[],[],[],[],[]];
    var currentPlayer = player1;
    this.gameOver = "false";
    viewEngine.clearFlash();

  },

  toggleCurrentPlayer: function(){
    if (this.currentPlayer === "player1") {
      this.currentPlayer = "player2";
    } else {
      this.currentPlayer = "player1";
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

makemove: function(columnNumber){
  if(this.isValidMove(columnNumber)){
    this.board[columnNumber].push(this.player);
    if(this.checkForVictory(columnNumber)){
      this.gameOver=true;
    }
    else {
      this.toggleCurrentPlayer();
    }
    return true;
    }
    return false;
  },

isValidMove: function(columnNumber){
  if (!GameEngine.gameOver){
    if(!GameEngine.board.length || GameEngine.board[0].length <6) {
      viewEngine.clearFlash();
      return true;
    }
    viewEngine.flashMessage("Choose a different move.");
    return false;
  }
  if (GameEngine.player == "Red"){
    viewEngine.flashMessage("Red player has won!");
  }
  else{
    viewEngine.flashMessage("Blue player has won!");
  }
  return false;
}
}

var viewEngine = {
  printBoard: function(){
    for(var i=0; i< GameEngine.board.length; i++){
        for (var j=0; j <6; j++)
      {
        if (board[i][j] === "Red") {
          output +=  "Red";
        } else if (board[i][j] === "Blue") {
            output +=  "Blue";
        } else {
          output += "white";
        }
      }
      }
      return output;
    },

    flashMessage: function(){
      document.getElementsByClassName('flash-msg').innerHTML("message");
      var sheet = document.createElement('style')
      sheet.innerHTML = "div {display: block;}";
      document.body.appendChild(sheet);
    },

    clearFlash: function(){
      document.getElementsByClassName('flash-msg').innerHTML("");
      var sheets = document.createElement('style')
      sheets.innerHTML = "div {display: block;}";
      document.body.appendChild(sheets);
    }
  }

 var gameController = {
   StartNewGame: function(){
     GameEngine.resetGame();
     viewEngine.printBoard();
   },

   onClickAddPiece: function(columnNumber){
     var columnNumber = this.querySelector('data-columns');
     var isValidMove = GameEngine.makemove(columnNumber-1);
     viewEngine.printBoard();
   }
 }
}

window.onload = function(){
  var el = document.getElementById("newgame");
  if (el) {
  addEventListener("click", function(){
    gameController.StartNewGame();
  })};
  var els = document.getElementsByClassName("movepiece");
  if (els) {
  addEventListener("click", function(){
   gameController.onClickAddPiece();
 })};
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

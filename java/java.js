const game = (function(){

    gameBoard = []
    markerX = "images/tic1.png"
    markerO = "images/tic2.png"
   let dialog = document.querySelector('dialog')


    function createBoard(){
        let row = 3
        let column = 3

        for(i = 0; i < row; i++){
            gameBoard[i] = []
        for(j = 0; j < column; j++){
            gameBoard[i][j] = 3;
        }
    }
    }
    createBoard();

function winner(){


    win = [
        [1, 1, 1],
        // second diagonal
    ]

    winO = [
        [0, 0, 0],
        // second diagonal
    ]
}
winner();

function determineWinner(){
   let firstRow = gameBoard[0]
   let secondRow = gameBoard[1]
   let thirdRow = gameBoard[2]
   let firstColum = [gameBoard[0][0], gameBoard[1][0], gameBoard[2][0]]
   let secondColum = [gameBoard[0][1], gameBoard[1][1], gameBoard[2][1]]
   let thirdColum = [gameBoard[0][2], gameBoard[1][2], gameBoard[2][2]]
   let firstDiagonal = [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]]
   let secondDiagonal = [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]]
   let score = 0;

   if(firstRow.toString() == win[0].toString()){
    score = 1
   }
   else if(firstRow.toString() == winO[0].toString()){
    score = 2
   }
   else{
    console.clear()
   }
//    first row detection

if(secondRow.toString() == win[0].toString()){
    score = 1
    }
    else if(secondRow.toString() == winO[0].toString()){
    score = 2
    }
    else{
    console.clear()

    }   
// second row detection

if(thirdRow.toString() == win[0].toString()){
    score = 1
}
else if(thirdRow.toString() == winO[0].toString()){
    score = 2
}
else{
    console.clear()

}
// third row detection

if(firstColum.toString() == win[0].toString()){
    score = 1
}
else if(firstColum.toString() == winO[0].toString()){
    score = 2
}
else{
    console.clear()

}
// first column detection

if(secondColum.toString() == win[0].toString()){
    score = 1
}
else if(secondColum.toString() == winO[0].toString()){
    score = 2
}
else{
    console.clear()

}
// second column detection

if(thirdColum.toString() == win[0].toString()){
    score = 1
}
else if(thirdColum.toString() == winO[0].toString()){
    score = 2
}
else{
    console.clear()

}
// third colum detection

if(firstDiagonal.toString() == win[0].toString()){
    score = 1
}
else if(firstDiagonal.toString() == winO[0].toString()){
    score = 2
}
else{
    console.clear()

}

// first diagonal detection

if(secondDiagonal.toString() == win[0].toString()){
    score = 1
}
else if(secondDiagonal.toString() == winO[0].toString()){
    score = 2
}
else{
    console.clear()

}
if(score == 1){
    console.log('you win')
    score = 0
    dialog.showModal()
}
else if(score == 2){
    console.log('you win player')
    score = 0
    dialog.showModal()
    
    


}
else{
    console.log(score)
}
// second diagonal detctecion
// this works
}

function clearBoard(){
    let cellElements = document.querySelectorAll('[data-cell]')
    cellElements.forEach(cell => {
        cell.style.backgroundImage = 'none'
    })
}
clearBoard()
function startGame(){
    boardControl();

    let start = document.getElementById('Start')
    start.addEventListener('click', () => {
        clearBoard()
        createBoard()
        dialog.close()
        boardControl();
    })
    
}
startGame();
function boardControl(){
    let board1 = document.getElementById('board1')
    let board2 = document.getElementById('board2')
    let board3 = document.getElementById('board3')
    let board4 = document.getElementById('board4')
    let board5 = document.getElementById('board5')
    let board6 = document.getElementById('board6')
    let board7 = document.getElementById('board7')
    let board8 = document.getElementById('board8')
    let board9 = document.getElementById('board9')
    let activePlayer = true;

    board1.addEventListener('click', () => {
        if(activePlayer == true){
            gameBoard[0][0] = 1
            board1.style.backgroundImage = `url(${markerX})`
            activePlayer = false
            determineWinner();
        } 
        else if(activePlayer == false){
            gameBoard[0][0] = 0
            board1.style.backgroundImage = `url(${markerO})`
            activePlayer = true
            determineWinner();
        }
        else{
            console.log("has not been clicked")
        }
    },  {once : true});

    board2.addEventListener('click', () => {
        if(activePlayer == true){
            gameBoard[0][1] = 1
            board2.style.backgroundImage = `url(${markerX})`
            activePlayer = false
            determineWinner();
        }
        else if(activePlayer == false){
            gameBoard[0][1] = 0
            board2.style.backgroundImage = `url(${markerO})`
            activePlayer = true
            determineWinner();
        }
        else{
            console.log("has not been clicked")
        }
    }, {once : true});
    board3.addEventListener('click', () => {
        if(activePlayer == true){
            gameBoard[0][2] = 1
            board3.style.backgroundImage = `url(${markerX})`
            activePlayer = false
            determineWinner();
        }
        else if(activePlayer == false){
            gameBoard[0][2] = 0
            board3.style.backgroundImage = `url(${markerO})`
            activePlayer = true
            determineWinner();
        }
        else{
            console.log("has not been clicked")
        }
    }, {once : true});
    board4.addEventListener('click', () => {
        if(activePlayer == true){
            gameBoard[1][0] = 1
            board4.style.backgroundImage = `url(${markerX})`
            activePlayer = false
            determineWinner();
        }
        else if(activePlayer == false){
            gameBoard[1][0] = 0
            board4.style.backgroundImage = `url(${markerO})`
            activePlayer = true
            determineWinner();
        }
        else{
            console.log("has not been clicked")
        }
    }, {once : true});
    board5.addEventListener('click', () => {
        if(activePlayer == true){
            gameBoard[1][1] = 1
            board5.style.backgroundImage = `url(${markerX})`
            activePlayer = false
            determineWinner();
        }
        else if(activePlayer == false){
            gameBoard[1][1] = 0
            board5.style.backgroundImage = `url(${markerO})`
            activePlayer = true
            determineWinner();
        }
        else{
            console.log("has not been clicked")
        }
    }, {once : true});
    board6.addEventListener('click', () => {
        if(activePlayer == true){
            gameBoard[1][2] = 1
            board6.style.backgroundImage = `url(${markerX})`
            activePlayer = false
            determineWinner();
        }
        else if(activePlayer == false){
            gameBoard[1][2] = 0
            board6.style.backgroundImage = `url(${markerO})`
            activePlayer = true
            determineWinner();
        }
        else{
            console.log("has not been clicked")
        }
    }, {once : true});
    board7.addEventListener('click', () => {
        if(activePlayer == true){
            gameBoard[2][0] = 1
            board7.style.backgroundImage = `url(${markerX})`
            activePlayer = false
            determineWinner();
        }
        else if(activePlayer == false){
            gameBoard[2][0] = 0
            board7.style.backgroundImage = `url(${markerO})`
            activePlayer = true
            determineWinner();
        }
        else{
            console.log("has not been clicked")
        }
    }, {once : true});
    board8.addEventListener('click', () => {
        if(activePlayer == true){
            gameBoard[2][1] = 1
            board8.style.backgroundImage = `url(${markerX})`
            activePlayer = false
            determineWinner();
        }
        else if(activePlayer == false){
            gameBoard[2][1] = 0
            board8.style.backgroundImage = `url(${markerO})`
            activePlayer = true
            determineWinner();
        }
        else{
            console.log("has not been clicked")
        }
    }, {once : true});
    board9.addEventListener('click', () => {
        if(activePlayer == true){
            gameBoard[2][2] = 1
            board9.style.backgroundImage = `url(${markerX})`
            activePlayer = false
            determineWinner();
        }
        else if(activePlayer == false){
            gameBoard[2][2] = 0
            board9.style.backgroundImage = `url(${markerO})`
            activePlayer = true
            determineWinner();
        }
        else{
            console.log("has not been clicked")
        }
    }, {once : true});
}
boardControl();
return {
    playRound: function(){
        startGame()
    }
}


})();
game.playRound();
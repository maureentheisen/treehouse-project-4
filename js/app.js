document.addEventListener('DOMContentLoaded', () => {

const start = document.getElementById('start');
const startButton = document.getElementById('startButton');
const board = document.getElementById('board');

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const box = document.getElementById("boxes");
const boxes = document.querySelectorAll(".box");


board.classList.add('hide');

function startGame(){
  start.classList.add('hide');
  board.classList.remove('hide');
  player1.classList.add('active');
}

startButton.addEventListener("click", startGame, false);


function fillBox(event){
  if(player1.classList.contains('active')){
    event.target.classList.add('box-filled-1');
  } else {
    event.target.classList.add('box-filled-2');
  }
}
function emptyBox(event){
  if(player1.classList.contains('active')){
    event.target.classList.remove('box-filled-1');
  } else {
    event.target.classList.remove('box-filled-2');
  }
}


function changePlayer(){
  if(player1.classList.contains('active')){
    player1.classList.remove('active');
    player2.classList.add('active');
  }else if(player2.classList.contains('active')){
    player2.classList.remove('active');
    player1.classList.add('active');
  }
}


function winGame(){
    for(let i=0; i < boxes.length; i++) {
        if ((boxes[i].classList.contains('box-filled-1')) && (boxes[i + 1].classList.contains('box-filled-1')) && (boxes[i - 1].classList.contains('box-filled-1'))) {
            alert('o wins');
        }
        else if ((boxes[i].classList.contains('box-filled-2')) && (boxes[i + 1].classList.contains('box-filled-2')) && (boxes[i - 1].classList.contains('box-filled-2'))) {
            alert('x wins');
        }
    }
}

boxes.forEach(function(box) {
    box.addEventListener("mouseenter", fillBox, false);
    box.addEventListener("mouseleave", emptyBox, false);
    box.addEventListener("click", function (event) {
        if (player1.classList.contains('active')) {
            event.target.classList.add('box-filled-1');
            event.target.removeEventListener("mouseleave", emptyBox, false);
            event.target.removeEventListener("mouseenter", fillBox, false);
            winGame();
            changePlayer();
        }
        else if (player2.classList.contains('active')) {
            event.target.classList.add('box-filled-2');
            event.target.removeEventListener("mouseleave", emptyBox, false);
            event.target.removeEventListener("mouseenter", fillBox, false);
            winGame();
            changePlayer();
        }
    })
});





});

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d')

let canvasSize;
let elemnetSize;

window.addEventListener('load',setCanvasSize);
window.addEventListener('resize',setCanvasSize);


function setCanvasSize() {
    if (window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)
    
    elemnetSize = (canvasSize / 10);


    startGame();
}

function startGame() {

    game.font = elemnetSize + 'px Verdana';
    game.textAlign = "end";

    for (let i = 1; i <= 10 ; i++) {
        game.fillText(emojis['X'], elemnetSize * i + 15, elemnetSize);
    }

}
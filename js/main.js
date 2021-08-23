// the only thinfg i do directly

const game = new Game();

function preload() {
    game.preloadGame();
}

let side = 0;

function setup() {
    let titleStyle = getComputedStyle(document.querySelector('body'));
    //// //// to solve
    // console.log (titleStyle) ;
    if (windowWidth > windowHeight){
        side = Math.round(0.9*windowHeight);
    } else if (windowWidth <= windowHeight){
        side = Math.round(0.9*windowWidth);
    }
    createCanvas(side, side);
    
    game.setup();
}

function draw() {
    game.draw();
}
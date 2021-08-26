const game = new Game();

function preload() {
    // useless now, may use to add  sound though
    game.preloadGame();
}

function setup() {
    let side = 0;
    if (windowWidth > windowHeight){
        side = Math.round(0.9*windowHeight);
    } else if (windowWidth <= windowHeight){
        side = Math.round(0.9*windowWidth);
    }
    
    // necessary because of weird p5 behaviours
    var cnv = createCanvas(side, side);
    cnv.parent("gameBox");
    game.setup();
}

function draw() {
    game.draw();
}
// the only thinfg i do directly
const game = new Game();

function preload() {
    game.preloadGame();
}

function setup() {
    createCanvas(600, 600);
    game.setup();
}

function draw() {
    game.draw();
}
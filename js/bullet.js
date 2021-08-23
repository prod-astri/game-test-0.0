class Bullet {
    constructor(){
        this.x = game.cannon.x;
        this.y = game.cannon.y;
        this.bulletSize = game.cannon.coreSize/2
        console.log(`%c bullet constructor: new BULLET!`, `color: green`)
    }
    draw(state){
        circle(this.x, this.y, this.bulletSize);
    }
}
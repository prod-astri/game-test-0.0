class Cannon {
    constructor(){
        this.u = game.state.u;
        this.coreSize = 20*this.u
        this.x = 20*this.u;
        this.y = 80*this.u;
        console.log(`%c cannon constructor`, `color: green`)
    }
    draw(){
        circle(this.x, this.y, this.coreSize);
    }
}
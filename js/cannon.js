class Cannon {
    constructor(){
        this.u = game.state.u;
        this.coreSize = 10*this.u;
        this.x = this.coreSize*1.5;
        this.y = game.background.playerFloorHeight - this.coreSize/2;
        console.log(`%c cannon constructor`, `color: green`);
    }
    draw(){
        circle(this.x, this.y, this.coreSize);
    }
}
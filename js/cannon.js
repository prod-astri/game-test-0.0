class Cannon {
    constructor(){
        this.u = game.state.u;
        
        this.coreSize = 8*this.u;
        this.x = this.coreSize*1.5;
        this.y = game.background.playerFloorHeight - this.coreSize/2;
        console.log(`%c cannon constructor`, `color: green`)
        this.angle = game.angleMomentary;
        console.log(`%c cannon angle = ${game.angleMomentary}`, `color: blue`)
    }

    draw(){
        this.angle = game.angleMomentary;
        console.log(`%c cannon angle = ${this.angle}`, `color: salmon`)
        noFill()
        circle(this.x, this.y, this.coreSize);
        noFill()
        rect(this.x-this.coreSize/2, this.y-this.coreSize*1.2, this.coreSize, this.coreSize*1.2)
    }
}
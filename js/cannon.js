class Cannon {
    constructor(){
        this.u = game.state.u;
        // the circular part of the cannon
        this.coreSize = 6*this.u;
        // the x position is relative to the hill position!
        this.x = game.state.blocksLeft/2
        this.y = game.background.playerFloorHeight - this.coreSize/2;

        this.angle = game.angleMomentary;
        
        console.log(`%c cannon starting angle = ${this.angle}`, `color: lightgreen`)
        console.log(`%c / cannon constructor`, `color: green`)
    }

    draw(){
        strokeWeight(1);
        fill('azure')
        circle(this.x, this.y, this.coreSize);


        //// missing rotation
        rect(this.x-this.coreSize/2, this.y-this.coreSize, this.coreSize, this.coreSize)
        // console.log(`%c cannon angle = ${game.angleMomentary}`, `color: salmon`)
    }
}
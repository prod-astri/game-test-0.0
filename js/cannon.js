class Cannon {
    constructor(){
        this.u = game.state.u;
        
        this.coreSize = 8*this.u;
        this.x = this.coreSize*1.5;
        this.y = game.background.playerFloorHeight - this.coreSize/2;

        this.angle = game.angleMomentary;
        
        console.log(`%c cannon starting angle = ${this.angle}`, `color: lightgreen`)
        console.log(`%c / cannon constructor`, `color: green`)
    }

    draw(){
        strokeWeight(1);
        fill('azure')
        circle(this.x, this.y, this.coreSize);
        
        rect(this.x-this.coreSize/2, this.y-this.coreSize*1.2, this.coreSize, this.coreSize*1.2)
        
        // console.log(`%c cannon angle = ${this.angle}`, `color: salmon`)
    }
}
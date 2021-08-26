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
        
        // rotate the cannon mouth
        push()
        
        angleMode(DEGREES)
        translate(this.x, this.y);
        rotate(-game.angleMomentary);
        translate(0, -this.coreSize/2);
        rectMode(CENTER)
        rect(0, 0,this.coreSize, this.coreSize)
        
        pop();
        
        
        
        
        
        // console.log(`%c cannon angle = ${game.angleMomentary}`, `color: salmon`)
    }
}
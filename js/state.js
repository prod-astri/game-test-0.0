class State {
    constructor(){
        this.wind = Math.random()*0.028 - 0.014;
        this.gravity = 0.05;
        
        // creating an unit 1/100th of the canvas
        this.u = width/100;
        this.playerFloorHeight = 90*this.u
        console.log(`%c the unit is now ${this.u}`, `color: lightgreen`)
        
        this.state = "setup";
        this.bounces = 0;
        this.maxBounces = 3;
        
        this.backgroundLines = 400;
        
        this.spacesX = [[this.u, width-this.u],[0, width]]
        this.spacesY = [[this.u, height-this.u], [0, this.playerFloorHeight]]
        
        console.log(`%c / state constructor`, 'color: green');
    }
    
    collisions(){
        for (let space of this.spacesX){
            if (!this.isBetween(game.bullet.x, space[0], space [1])){
                this.finalCollision();
                // if (this.bounces <= this.maxBounces){
                //     game.bullet.velocityVector.rotatedX *= -1;
                //     console.log(this.bounces);
                //     this.bounces++;
                // } else {
                //     this.finalCollision()
                // } 
            }   
        }

        for (let space of this.spacesY){
            if (!this.isBetween(game.bullet.y, space[0], space [1])){
                this.finalCollision();
            }   
        }
    }
    
    
    finalCollision(){
        console.log('%c COLLISION!', `color: darkorange`);
        game.state.state = 'out';
        game.resetup();
    }
    
    isBetween(x, a, b){
        // alternative: (x-a)*(x-b)<0
        return (x-a^x-b)<0;
    }
}

class State {
    constructor(){
        this.wind = 0.05;
        this.gravity = 0.05;
        
        // creating an unit 1/100th of the canvas
        this.u = width/100;
        console.log(`%c the unit is now ${this.u}`, `color: lightgreen`)
        
        this.state = "setup";
        this.bounces = 0;
        this.maxBounces = 100000;
        
        
        
        
        console.log(`%c / state constructor`, 'color: green');
        this.spacesX = [[0, width],[0, width]]
        
        
        this.spacesY = [[this.u, width-this.u], [0, game.background.playerFloorHeight]]
        
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

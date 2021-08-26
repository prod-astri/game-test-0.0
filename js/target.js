class Target {
    constructor(){
        this.size = game.cannon.coreSize/2.5;
        
        // where can it appear on the x axis
        this.limit = 0.8*width+this.size;
        this.x = (Math.random() * (width - this.limit)) + this.limit;
        this.y = Math.random()*(game.background.playerFloorHeight - this.size);
        
        this.hit = false;
        console.log(`%c / target constructor: new TARGET!`, `color: salmon`)
    }
    
    draw(){
        if (game.state.state === 'shoot' || game.state.state === 'setup' ){ // && this.hit === false
            fill('Crimson')
            circle(this.x, this.y, this.size); 
        } else if (game.state.state === 'hit'){
            this.hitCollision() 
        }
       //  console.log(game.state.state)
    }
    
    hitCollision(){
        console.log('hitcollision - could be better')
            game.state.finalCollision()
    }
}
class Target {
    constructor(){
        //                                                  V circle + rect
        this.size = game.cannon.coreSize/2.5;
        // this.limit = game.cannon.x + (game.cannon.coreSize * 2.2);
        this.limit = 0.8*width+this.size;

        this.x = (Math.random() * (width - this.limit)) + this.limit;
        // this.x = game.cannon.x;
        this.y = Math.random()*(game.background.playerFloorHeight - this.size);
        // this.y = 200;
        
        this.i = 0;
        this.hit = false;
        console.log(`%c / target constructor: new TARGET!`, `color: salmon`)
    }
    
    draw(){
        if (game.state.state === 'shoot' || game.state.state === 'setup' ){ // && this.hit === false
            fill('Crimson')
            circle(this.x, this.y, this.size); 
        } else if (game.state.state === 'hit'){
            this.hitCollision()
            // while (this.i <= 1000){
            //     // console.log(this.i)
            //     console.log(this.i);
            //     fill('red');
            //     circle(this.x, this.y, 30);
            //     circle(this.x, this.y, 300 );
            //     circle(this.x, this.y, 80);
            //     this.i+=0.01
            //     if (this.i >= 999){
            //         console.log(`%c .start`, 'color: blue')
            //         game.state.finalCollision()
            //     }
                
            // }
            
            
        }
       //  console.log(game.state.state)
    }
    
    hitCollision(){
        console.log('hitcollision - could be better')
            // for (let i = 0; i <= 10000; i++){
            //     console.log(i)
            //     text('HIT', width/2, height/2);
            // }
            game.state.finalCollision()
    }
    // targetCollision(){
    
    // }
}
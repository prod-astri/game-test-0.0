class State {
    constructor(points, runs){
        this.points = points;
        this.runs = runs;
        console.log(`%c starting with ${this.points} points,  ${this.runs} runs`, `color: orange`)
        
        this.gravity = 0.05;
        this.wind = Math.random()*0.028 - 0.014;
        console.log(`%c the wind is now ${this.wind}`, `color: lightgreen`)
        
        // creating an unit 1/100th of the canvas
        this.u = width/100;
        this.playerFloorHeight = 90*this.u
        // console.log(`%c the unit is now ${this.u}`, `color: lightgreen`)
        
        this.state = "setup";
        this.bounces = 0;
        this.maxBounces = 3;
        
        //this.backgroundLines = Math.round(abs(30000*this.wind));
        this.backgroundLines = 300;

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
        
        // console.log(`%c x dif ${abs(game.bullet.x - game.target.x)}`, `color: blue`)
        // console.log(`%c y dif ${abs(game.bullet.y - game.target.y)}`, `color: blue`)
        // console.log(game.bullet.bulletSize)
        if (game.target.hit === false){
            // console.log('stillfalse')
            if (abs(game.bullet.x - game.target.x) < game.bullet.bulletSize && abs(game.bullet.y - game.target.y) < game.bullet.bulletSize){
                console.log(`%c HIT`, `color: red`)
                game.state.points++
                game.target.hit = true;
                game.state.state = 'hit';
                
            }
        }
        
        // if (abs(this.x - game.bullet.x) < game.bullet.size && abs(this.y - game.bullet.y) < game.bullet.size){
        //     console.log(`%c test`, `color: blue`)
        //     game.state.state = 'hit';
        //     for (let i = 0; i < 1000; i++){
        //         strokeWeight(0.8);
        //         circle(this.x, this.y, this.size*i)
        //         circle(this.x, this.y, this.size*i/2)
        //         circle(this.x, this.y, this.size*i/3)
        
        //     }
        //     game.state.points++
        //     this.hit = true;
        //     console.log('hit! +1 pt')
        
        // }
    }
    
    
    finalCollision(){
        console.log('%c COLLISION!', `color: darkorange`);
        game.state.state = 'out';
        game.state.runs++;
        game.resetup();
    }
    
    isBetween(x, a, b){
        // alternative: (x-a)*(x-b)<0
        return (x-a^x-b)<0;
    }
}

class State {
    constructor(points, runs){
        this.points = points;
        this.runs = runs;
        this.state = "setup";
        console.log(`%c starting with ${this.points} points,  ${this.runs} runs`, `color: orange`)
        
        // this.gravity = 0;
        // this.wind = 0;
        // this.topHeightMod = 0;

        this.gravity = 0.05;
        this.wind = Math.random()*0.028 - 0.014;
        this.topHeightMod = 1;
        console.log(`%c the wind is now ${this.wind}`, `color: lightgreen`)
        
        // creating an unit 1/100th of the canvas
        this.u = width/100;

        // this goues to background
        this.playerFloorHeight = 90*this.u

        //    amount of wind lines
        this.backgroundLines = 300;
        
        //    these are used to check the bounds of floor and game space
        this.spacesX = [[this.u, width*1.6],[0, width*1.6]]
        this.spacesY = [[-height, height-this.u], [-height, this.playerFloorHeight]]
        
        //    hill margin tip, amount of parts
        this.blocksLeft = width/5;
        this.topHeight = Math.random()*60*this.u*this.topHeightMod;
        this.totalBlocks = 120;

        //    should create in three fifths of the space, the mountain area
        this.blocksWidth = (width/5*3)/this.totalBlocks;
        //    randomly pick a tallest step, not too close to the cannon
        this.highestBlock = Math.round(this.totalBlocks/5 + Math.round(Math.random()*(this.totalBlocks-this.totalBlocks/5)))
        //    calculate the heights of the other blocks to make the mountain;
        this.blocksHeights = this.calculateBlocksHeights(this.topHeight, this.highestBlock, this.totalBlocks);

        console.log(`%c / state constructor`, 'color: green');
    }
    
    //returns descending values left and right of a top point
    //                     V highest number
    //                     V         V index of the highest number / block
    //                     V         V          V number of total steps
    calculateBlocksHeights(topHeight, topIndex, totalBlocks){
        let res = [];
        for (let i = 1; i <= totalBlocks; i++){
            if (i < topIndex){
                res.push(topHeight/topIndex*i);
            } else if (i > topIndex){
                res.push(topHeight/(totalBlocks-topIndex+1)*(totalBlocks-i+1))
            } else if (i === topIndex) {
                res.push(topHeight);
            }
        }
        return res;
    }
    
    collisions(){
        // box ad main floor collisions
        for (let space of this.spacesX){
            if (!this.isBetween(game.bullet.x, space[0], space [1])){
                this.finalCollision();
            }   
        }
        
        for (let space of this.spacesY){
            if (!this.isBetween(game.bullet.y, space[0], space [1])){
                this.finalCollision();
            }   
        }
        
        // -- target collision
        if (game.target.hit === false){
            if (abs(game.bullet.x - game.target.x) < game.bullet.bulletSize && abs(game.bullet.y - game.target.y) < game.bullet.bulletSize){
                console.log(`%c HIT`, `color: red`)
                game.state.points++
                game.target.hit = true;
                // this happens very shortly, does almost nothing
                // triggers finalCollision in Target's Draw func
                game.state.state = 'hit';
                
            }
        }
        
        // -- hill collision
        for (let i in this.blocksHeights){    
            if (this.isBetween(game.bullet.x, this.blocksLeft+this.blocksWidth*i, this.blocksLeft+this.blocksWidth*(i+1)) && game.bullet.y > this.playerFloorHeight-this.blocksHeights[i]){
                console.log(`%c you hit the hill ${i}`, `color: fuchsia`)
                this.finalCollision()
            };
            
        }
    }
    
    finalCollision(){
        console.log('%c COLLISION!', `color: darkorange`);
        game.state.state = 'out';
        game.state.runs++;
        game.resetup();
    }
    
    // used for collision detection
    isBetween(x, a, b){
        // alternative: (x-a)*(x-b)<0
        return (x-a^x-b)<0;
    }
}

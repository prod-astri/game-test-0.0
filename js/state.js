class State {
    constructor(points, runs){
        this.points = points;
        this.runs = runs;
        console.log(`%c starting with ${this.points} points,  ${this.runs} runs`, `color: orange`)
        
        //this.gravity = 0.05;
        //this.wind = Math.random()*0.028 - 0.014;
        this.gravity = 0;
        this.wind = 0;
        console.log(`%c the wind is now ${this.wind}`, `color: lightgreen`)
        
        // creating an unit 1/100th of the canvas
        this.u = width/100;
        this.playerFloorHeight = 90*this.u
        // console.log(`%c the unit is now ${this.u}`, `color: lightgreen`)
        
        this.state = "setup";
        this.bounces = 0;
        this.maxBounces = 3;
        
        this.backgroundLines = 300;
        
        this.spacesX = [[this.u, width-this.u],[0, width]]
        this.spacesY = [[this.u, height-this.u], [0, this.playerFloorHeight]]
        
        // hill margin tip, amount of parts
        this.blocksLeft = width/5;
        this.topHeight = Math.random()*60*this.u;
        this.totalBlocks = 19;
        //should create X blocks in a third of the space
        this.blocksWidth = (width/5*3)/this.totalBlocks;
        // make X steps: wich one is the tallest?
        this.highestBlock = Math.round(this.totalBlocks/5 + Math.round(Math.random()*(this.totalBlocks-this.totalBlocks/5)))
        // calculate the heights of the other blocks;
        this.blocksHeights = this.calculateBlocksHeights(this.topHeight, this.highestBlock, this.totalBlocks);
        console.log(`%c highest block is number ${this.highestBlock}`, `color: lightgreen`);
        console.log(`%c blocks heights ${this.blocksHeights}`, `color: lightgreen`)
        
        console.log(`%c / state constructor`, 'color: green');
    }
    
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
        // for (let el of res){
        //     el = this.playerFloorHeight - el;
        // }
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
            // console.log('stillfalse')
            if (abs(game.bullet.x - game.target.x) < game.bullet.bulletSize && abs(game.bullet.y - game.target.y) < game.bullet.bulletSize){
                console.log(`%c HIT`, `color: red`)
                game.state.points++
                game.target.hit = true;
                game.state.state = 'hit';
                
            }
        }
        
        //for (let xPoint = this.blocksLeft; xPoint <= width - this.blocksLeft; )
        //    let i = 0;
        for (let i in this.blocksHeights){    
            if (this.isBetween(game.bullet.x, this.blocksLeft+this.blocksWidth*i, this.blocksLeft+this.blocksWidth*(i+1)) && game.bullet.y > this.playerFloorHeight-this.blocksHeights[i]){
                console.log(`%c you hit the hill ${i}`, `color: fuchsia`)
                this.finalCollision()
            };
            
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

class Background {
    constructor(){
        // repeating the statement due to structure problems
        this.u = game.state.u;
        this.playerFloorHeight = 90*this.u;
        this.windOffset = 1000*game.state.wind;
        
        this.lines = this.newLinesSet();
        
        this.blocksLeft = game.state.blocksLeft;
        this.topHeight = game.state.topHeight;
        this.totalBlocks = game.state.totalBlocks;
        
        this.blocksWidth = game.state.blocksWidth;
        
        this.highestBlock = game.state.highestBlock;
        this.blocksHeights = game.state.blocksHeights;
        
        console.log(`%c / background constructor`, 'color: green');
    }
    
    
    
    newLinesSet(){
        let arr = [];
        for (let i = 1; i < game.state.backgroundLines; i++ ){
            let x1, y1, x2, y2;
            y1 = Math.random() * this.playerFloorHeight;
            y2 = y1;
            x1 = Math.random() * width;
            x2 = x1+2*this.windOffset;
            arr.push([x1, y1, x2, y2])
        }
        console.log('%c / new set of background lines', 'color: green')
        return arr;
    }
    
    draw(){
        stroke('black')
        
        // -- wind lines
        strokeWeight(0.5);
        for (let stroke of this.lines){
            line(stroke[0], stroke[1], stroke[2], stroke[3])
            fill('azure')
            // line heads
            circle(stroke[0], stroke[1], 0.01*this.u - abs(this.windOffset)/5)
            // x1 coordinate of each line
            stroke[0] -= game.state.wind*30;
            // x2 coordinate of each line
            stroke[2] -= game.state.wind*30;
            // loop the wind strokes
            if (game.state.wind > 0){
                if (stroke[2] < 0){
                    stroke[0] = width;
                    stroke[2] = stroke[0]+this.windOffset*2;
                    stroke[1] = stroke[3] = Math.random() * this.playerFloorHeight;
                }
            } else if (game.state.wind <= 0){
                if (stroke[2] > width){
                    stroke[0] = 0;
                    stroke[2] = stroke[0]+this.windOffset*2;
                    stroke[1] = stroke[3] = Math.random() * this.playerFloorHeight;
                }
            }
        }
        
        stroke('gainsboro');
        fill('gainsboro')
        
        // -- floor
        rect(0, this.playerFloorHeight, width, this.playerFloorHeight);
        
        // -- hill
        for (let block in this.blocksHeights){
            rect(this.blocksLeft + (this.blocksWidth * block), this.playerFloorHeight-this.blocksHeights[block], this.blocksWidth, height)       
        }
        
        stroke('black')
        strokeWeight(1);
        push()
        // -- points counter
        fill('crimson')
        text(`${game.state.points}/${game.state.runs}`, width - 2*this.u, 7*this.u)
        pop()
    }   
}
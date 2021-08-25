class Background {
    constructor(){
        // repeating the statement due to structure problems
        this.u = game.state.u;
        this.playerFloorHeight = 90*this.u;
        this.windOffset = 1000*game.state.wind;
        // console.log(this.windOffset, '<---- wind offset')

        this.lines = this.newLinesSet();
        // console.log(`%c / ${this.lines}`, 'color: blue')
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
        // console.log(`%c background draw`, `color: green`);
        
        // floor
        stroke('black')
        strokeWeight(1);
        line(0, this.playerFloorHeight, width, this.playerFloorHeight);
        strokeWeight(0.5);
        for (let stroke of this.lines){
            line(stroke[0], stroke[1], stroke[2], stroke[3])
            noFill()
            // circle(stroke[0], stroke[1], 0.14 - abs(this.windOffset)/5)
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
        fill('crimson')
        text(`${game.state.points}/${game.state.runs}`, width - 10*this.u, 7*this.u)
    }   
}
class myControls {
    constructor(){
        this.y = 0.95*height;
        console.log(`%c / controls constructor`, `color: green`)
    }

    draw(){
        
        line(0.05*width, this.y, 0.35*width, this.y)
        line(0.65*width, this.y, 0.95*width, this.y)
        if (game.state.state === 'setup'){
            fill('white')
            rect(0.4*width, 0.93*height, 0.2*height, 0.04*height, 3);
           
            push()
            textAlign(CENTER, CENTER)
            textSize(18*game.u);
            fill('darkgrey')
            noStroke()
            text("oh shoot!", width/2, 0.953*height);
            pop()
        } else if (game.state.state === 'shoot'){
            push()
            textAlign(CENTER, CENTER)
            textSize(18*game.u);
            stroke('white')
            text("airborne...", width/2, 0.953*height);
            pop()
        }
        
        
    }
}
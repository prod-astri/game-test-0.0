class myControls {
    constructor(){
        this.u = width/100
        this.y = 0.95*height;
        console.log(`%c / controls constructor`, `color: green`)
    }

    draw(){
        
        push()
        // line(0.05*width, this.y, 0.35*width, this.y)
        // line(0.65*width, this.y, 0.95*width, this.y)

        if (game.state.state === 'setup'){
           
            textAlign(CENTER, CENTER)
            fill('darkgrey')
            noStroke()
            textSize(8*this.u);
            text("oh shoot!", width/2, 0.953*height);
         

        } else if (game.state.state === 'shoot'){
            fill('crimson')
            textAlign(CENTER, CENTER)
            textSize(8*this.u);
            stroke('white')
            text("airborne...", width/2, 0.953*height);
            
        }
        pop()
        
    }
}
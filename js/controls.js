class myControls {
    // are actally not controls but just the bottom text
    constructor(){
        this.u = width/100
        this.y = 0.95*height;
        console.log(`%c / controls constructor`, `color: green`)
    }
    
    draw(){
        
        push()
        
        if (game.state.state === 'setup'){
            textAlign(CENTER, CENTER)
            fill('darkgrey')
            noStroke()
            textSize(6*this.u);
            text("oh shoot!", width/2, 0.953*height);
        } else if (game.state.state === 'shoot'){
            fill('crimson')
            textAlign(CENTER, CENTER)
            textSize(6*this.u);
            stroke('white')
            text("airborne...", width/2, 0.953*height); 
        }
        
        pop()
        
    }
}
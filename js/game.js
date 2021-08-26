class Game {
    constructor(){
        this.u = 1;
        
        this.angleInput;
        this.velocityInput;
        this.commitButton;
        
        this.angleMomentary = 0;
        this.angleCommitted = 0;
        
        this.velocityMomentary = 0;
        this.velocityCommitted = 0;
        
        console.log(`%c / game constructor`, `color: green`)
    }
    
    setup(){
        this.state = new State(0, 0);
        this.background = new Background();

        this.mycontrols = new myControls();

        this.cannon = new Cannon();
        this.bullet = new Bullet();

        this.target = new Target();

        textSize(6*this.state.u);
        textAlign(RIGHT);
        
        
        // creating the inputs and button;
        this.angleInput = createInput('0', 'number');
        this.angleInput.parent("gameBox");
        this.angleInput.position(12*this.u, 12*this.u);
        this.angleInput.size(120*this.u, 20*this.u);
        this.angleInput.input(this.myInputEvent);
        
        this.velocityInput = createInput('0', 'number');
        this.velocityInput.parent("gameBox");
        this.velocityInput.position(12*this.u, 42*this.u);
        this.velocityInput.size(120*this.u, 20*this.u);
        this.velocityInput.input(this.myInputEvent);
        
        this.commitButton = createButton("---shoot!---");
        this.commitButton.parent("gameBox");
        this.commitButton.position(12*this.u, 74*this.u);
        this.commitButton.size(127*this.u, 20*this.u);
        this.commitButton.mousePressed(this.myButtonEvent)
    }

    resetup(){
        this.u = width/100
        this.state = new State(this.state.points, this.state.runs);
        this.background = new Background();

       
        this.mycontrols = new myControls();

        this.cannon = new Cannon();
        this.bullet = new Bullet();

        this.target = new Target();

        textSize(6*this.state.u);
        textAlign(RIGHT);
        
    }
    
    preloadGame(){
        console.log(`%c / Preload!`, 'color: green')
    }
    
    draw() {
        clear()
        
        this.background.draw();
        this.mycontrols.draw();
        this.cannon.draw();
        this.bullet.move();
        this.bullet.draw();
        
        this.target.draw();

        this.state.collisions();
       
    }
    
    myInputEvent = () => {
       
        this.angleMomentary = -this.angleInput.value();
        this.velocityMomentary = 0.1*this.velocityInput.value();
        
        if (this.state.state === 'setup'){

            this.cannon.angle = this.angleMomentary;
            this.bullet.angle = this.angleMomentary;
            this.bullet.velocity = this.velocityMomentary;
            
            this.bullet.velocityVector.x = 0;
            this.bullet.velocityVector.y = this.bullet.velocity;
            
            this.bullet.velocityVector.rotatedX = (cos(this.bullet.angle)*this.bullet.velocityVector.x) - (sin(this.bullet.angle)*this.bullet.velocityVector.y);
            this.bullet.velocityVector.rotatedY = (sin(this.bullet.angle)*this.bullet.velocityVector.x) + (cos(this.bullet.angle)*this.bullet.velocityVector.y);    
        }
       
        // console.log('momentary cannon angle: ', this.cannon.angle);
        // console.log('momentary bullet velocity:', this.bullet.velocity);
        
    }
    
    myButtonEvent = () => {
        
        if (this.state.state === 'setup'){
            
            this.angleCommitted = this.angleMomentary;
            this.velocityCommitted = this.velocityMomentary;
            
            this.cannon.angle = this.angleCommitted;
            this.bullet.angle = this.angleCommitted;
            this.bullet.velocity = this.velocityCommitted
            
            //// //// this is really not ideal; 
            //// //// why have the truth in the state then?
            this.state.state = 'shoot';
            
            console.log(`%c shot with angle ${this.angleCommitted} and vel ${this.velocityCommitted}`, `color: orange`);
            
        } else {
            console.log(`%c already shot`, `color: red`)
        }
    }

}

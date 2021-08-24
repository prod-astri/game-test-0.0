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
        this.background = new Background();
        this.state = new State();
        
        this.cannon = new Cannon();
        this.bullet = new Bullet();

         // draggin along my beloved unit
        this.u = this.state.u;
        
        // creating the inputs and button;
        this.angleInput = createInput('0', 'number');
        this.angleInput.position(20, 20);
        this.angleInput.size(80);
        this.angleInput.input(this.myInputEvent);
        
        this.velocityInput = createInput('0', 'number');
        this.velocityInput.position(this.angleInput.x, this.angleInput.x + this.angleInput.height);
        this.velocityInput.size(80);
        this.velocityInput.input(this.myInputEvent);
        
        this.commitButton = createButton("shoot!");
        this.commitButton.position(this.angleInput.x + this.angleInput.width, this.angleInput.x)
        this.commitButton.mousePressed(this.myButtonEvent)
    }

    resetup(){
        this.background = new Background();
        this.state = new State();
        
        this.cannon = new Cannon();
        this.bullet = new Bullet();

         // draggin along my beloved unit
        this.u = this.state.u;
        
        // // creating the inputs and button;
        // this.angleInput = createInput('0', 'number');
        // this.angleInput.position(20, 20);
        // this.angleInput.size(80);
        // this.angleInput.input(this.myInputEvent);
        
        // this.velocityInput = createInput('0', 'number');
        // this.velocityInput.position(this.angleInput.x, this.angleInput.x + this.angleInput.height);
        // this.velocityInput.size(80);
        // this.velocityInput.input(this.myInputEvent);
        
        // this.commitButton = createButton("shoot!");
        // this.commitButton.position(this.angleInput.x + this.angleInput.width, this.angleInput.x)
        // this.commitButton.mousePressed(this.myButtonEvent)
    }
    
    preloadGame(){
        console.log(`%c / Preload!`, 'color: green')
    }
    
    draw() {
        clear()
        
        this.background.draw(width/2, height/2);
        this.cannon.draw();
        this.bullet.move();
        this.bullet.draw();
        this.state.collisions()
        // console.log(frameCount)
        // 15.. iterating over obstacles array and draw every object
        // this.obstacles.forEach(function(obstacle){
        //     obstacle.draw();
        // })   
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

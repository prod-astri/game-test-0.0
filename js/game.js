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
        this.state = new State();
        this.background = new Background();
        this.cannon = new Cannon();
        this.bullet = new Bullet();

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

    preloadGame(){
        console.log(`%c / Preload!`, 'color: green')
    }
    
    draw() {
        clear()

        this.background.draw(width/2, height/2);
        this.cannon.draw();
        this.bullet.draw();
        
        // console.log(frameCount)
        // 15.. iterating over obstacles array and draw every object
        // this.obstacles.forEach(function(obstacle){
        //     obstacle.draw();
        // })   
    }
    
    myInputEvent = () => {
        this.angleMomentary = this.angleInput.value();
        this.velocityMomentary = this.velocityInput.value();

        this.cannon.angle = this.angleMomentary;
        this.bullet.angle = this.angleMomentary;
        this.bullet.velocity = this.velocityMomentary;
    
        console.log('momentary cannon angle: ', this.cannon.angle);

       
        console.log('momentary bullet velocity:', this.bullet.velocity);
        
    }
    
    myButtonEvent = () => {
    
        this.angleCommitted = this.angleMomentary;
        this.velocityCommitted = this.velocityMomentary;

        this.cannon.angle = this.angleCommitted;
        this.bullet.angle = this.angleCommitted;
        this.bullet.velocity = this.velocityCommitted

        console.log(`%c  shot with angle ${this.angleCommitted} and vel ${this.velocityCommitted}`, `color: orange`);
        
    }

}

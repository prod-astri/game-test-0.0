class Game {
    constructor(){
        // will override in the setup
        this.u = 1;
        console.log(`%c game constructor`, `color: green`)
        this.angleInput;
        this.commitButton;
        
        
        this.angleMomentary = 0;
        this.angleCommitted = 0;
    }
    
    setup(){
        this.state = new State();
        this.background = new Background();
        this.cannon = new Cannon();
        this.bullet = new Bullet();
        this.u = this.state.u;
        console.log(`%c the game setup unit is now ${this.u}`, `color: orange`)
        
        // numeric input for 
        this.angleInput = createInput('0', 'number');
        this.angleInput.position(20, 20);
        this.angleInput.size(80);
        this.angleInput.input(this.myInputEvent);
        
        this.commitButton = createButton("shoot!");
        this.commitButton.position(this.angleInput.x + this.angleInput.width, this.angleInput.x)
        this.commitButton.mousePressed(this.myButtonEvent)
    }
    
    //   button = createButton('submit');
    //   button.position(input.x + input.width, 65);
    //   button.mousePressed(greet);
    
    //   greeting = createElement('h2', 'what is your name?');
    //   greeting.position(20, 5);
    
    
    preloadGame(){
        console.log("preload!")
        // this.backgroundImages = [
        //     {src: loadImage('assets/background/plx-1.png'), x:0, speed:0},
        // ]
        // this.playerImage = loadImage('assets/player/bird.png');
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
    
    
    myInputEvent() {
        this.angleMomentary = this.value();
        console.log('angleMomentary: ', this.angleMomentary);
        console.log (`%c angle committed: ${this.angleCommitted}`, `color: purple`)
    }
    
    
    myButtonEvent() {
        console.log (`%c button event angle committed: ${this.angleCommitted}`, `color: orange`)
        this.angleCommitted = this.angleMomentary;
        
        this.cannon.angle = this.angleCommitted;
    }
    
}

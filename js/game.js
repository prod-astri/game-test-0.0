class Game {
    constructor(){
        // will override in the setup
        this.u = 1;
        console.log(`%c game constructor`, `color: green`)
        this.angleInput;
    }
    
    setup(){
        this.state = new State();
        this.background = new Background();
        this.cannon = new Cannon();
        this.bullet = new Bullet();
        this.u = this.state.u;
        console.log(`%c the game setup unit is now ${this.u}`, `color: orange`)
        
        
        this.angleInput = createInput('0', 'number');
        this.angleInput.position(0, 0);
        this.angleInput.size(80);
        this.angleInput.input(this.myInputEvent);
        
        // let commitButton = createButton("shoot!");
        // commitButton.position(angleInput.x + angleInput.width, 0)
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
        console.log('angle value: ', this.value());
    }
}

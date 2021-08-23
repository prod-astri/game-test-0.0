class Game {
    constructor(){
       console.log(`%c game constructor`, `color: green`)
    }

    setup(){
        this.state = new State();
        this.background = new Background();
        this.cannon = new Cannon()
    }
   
    preloadGame(){
        console.log("preload!")
        // this.backgroundImages = [
        //     {src: loadImage('assets/background/plx-1.png'), x:0, speed:0},
        // ]
        // this.playerImage = loadImage('assets/player/bird.png');
    }

    draw() {
        clear()
        
        this.background.draw();
        this.cannon.draw();
        
        // console.log(frameCount)
        // 15.. iterating over obstacles array and draw every object
        // this.obstacles.forEach(function(obstacle){
        //     obstacle.draw();
        // })   
    }
}

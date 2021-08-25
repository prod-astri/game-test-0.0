class Bullet {
    constructor(){
        this.u = game.state.u;

        this.x = game.cannon.x;
        this.y = game.cannon.y;
        this.bulletSize = game.cannon.coreSize/2;

        this.gravity = game.state.gravity;
        this.wind = game.state.wind;
        this.angle = 0;
        this.velocity = 0;
        
        // 𝑥2 = cos𝛽𝑥1 − sin𝛽𝑦1 
        // 𝑦2 = sin𝛽𝑥1 + cos𝛽𝑦1
        this.velocityVector = {
            x: 0,
            y: 0,
            rotatedX: 0,
            rotatedY: 0,
        }
        console.log(`%c / bullet constructor: new BULLET!`, `color: green`)
    }
    
    move(){
        
        if (game.state.state === 'shoot'){
            this.x += this.velocityVector.rotatedX;
            this.y -= this.velocityVector.rotatedY;
            
            // gravity 
            this.velocityVector.rotatedY -= this.gravity;
            // wind
            this.velocityVector.rotatedX -= this.wind;
        }
    }
    //console.log(`%c / gravity in move mod: ${this.gravity}`, `color: red`)
    
    draw(state){
        angleMode(DEGREES)       

        // 
        line(this.x, this.y, this.x + 16*this.velocityVector.rotatedX, this.y - 16*this.velocityVector.rotatedY)
        // the bullet
        fill('azure')
        circle(this.x, this.y, this.bulletSize);
        // the vector head
        fill(255, 0, 0)
        noStroke()
        circle(this.x + 16*this.velocityVector.rotatedX, this.y - 16*this.velocityVector.rotatedY, this.u)
        
                // size of the bullet changing
        // could make 1 more for the win lose stuff
        if (game.state.state === 'setup'){
            this.bulletSize -= game.cannon.coreSize/100;
            if (this.bulletSize <= game.cannon.coreSize/10){
                this.bulletSize = game.cannon.coreSize/2;
            }
        }
        if (game.state.state === "shoot"){
            if (this.bulletSize < game.cannon.coreSize/2){
                this.bulletSize += game.cannon.coreSize/200;   
            }
        }

    }
}


class Bullet {
    constructor(){
        this.x = game.cannon.x;
        this.y = game.cannon.y;
        this.bulletSize = game.cannon.coreSize/2;
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
            this.velocityVector.rotatedY -= game.state.gravity;
        }
    }
    
    draw(state){
        
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

        circle(this.x, this.y, this.bulletSize);
        
        // la x del vettore e' uguale alla x del proiettile
        // this.velocityVector.x = this.x;
        // // la y del vettore e' la y del proiettile - la lunghezza, determinata da Velocity
        // this.velocityVector.y = this.y - this.velocity;
        // // e ora le ruoto con la formula
        // this.velocityVector.rotatedX = (cos(this.angle)*this.velocityVector.x) - (sin(this.angle)*this.velocityVector.y);
        // this.velocityVector.rotatedY = (sin(this.angle)*this.velocityVector.x) + (cos(this.angle)*this.velocityVector.y);
        // this.velocityVector.rotatedX += this.x;
        // this.velocityVector.rotatedY += this.y;
        // line(this.x, this.y, this.velocityVector.rotatedX, this.velocityVector.rotatedY)
        
    }
}


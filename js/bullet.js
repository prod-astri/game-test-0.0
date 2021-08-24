class Bullet {
    constructor(){
        this.x = game.cannon.x;
        this.y = game.cannon.y;
        this.bulletSize = game.cannon.coreSize/2;
        this.angle = 0;
        this.velocity = 0;
        // 𝑥2 = cos𝛽𝑥1 − sin𝛽𝑦1 
        // 𝑦2=sin𝛽𝑥1 + cos𝛽𝑦1
        this.velocityVector = {
            x: 0,
            y: 0
        }
        console.log(`%c / bullet constructor: new BULLET!`, `color: green`)
    }

    draw(state){
        circle(this.x, this.y, this.bulletSize);

        // la x del vettore e' uguale alla x del proiettile
        this.velocityVector.x = this.x;
        // la y del vettore e' la y del proiettile - la lunghezza, determinata da Velocity
        this.velocityVector.y = this.y - this.velocity;
        line(this.x, this.y, this.velocityVector.x, this.velocityVector.y)
        
    }
}


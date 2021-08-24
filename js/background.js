class Background {
    constructor(){
        this.u = game.state.u;
        this.playerFloorHeight = 90*this.u;

        console.log(`%c background constructor`, 'color: green');
    }
    draw(){
        // console.log(`%c background draw`, `color: green`);

        // floor
        stroke('black')
        strokeWeight(1);
        line(0, this.playerFloorHeight, width, this.playerFloorHeight)
    }   
}
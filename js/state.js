class State {
    constructor(){
        // creating an unit 1/100th of the canvas
        this.u = width/100;
        console.log(`%c the unit is now ${this.u}`, `color: lightgreen`)
        this.wind = 0;
        this.gravity = 0.01;

        this.state = "setup";
        console.log(`%c / state constructor`, 'color: green');
        
    }
}
 
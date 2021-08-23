class State {
    constructor(){
        // creating an unit 1/100th of the canvas
        this.u = width/100;
        console.log(`%c the state setup unit is now ${this.u}`, `color: orange`)

        console.log(`%c state constructor`, 'color: green');
    }
}

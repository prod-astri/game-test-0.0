class Background {
    draw(){
        // console.log(`%c background draw`, `color: green`);

        // floor
        stroke('black')
        strokeWeight(1);
        line(0, height*0.9, width, height*0.9 )
    }   
}
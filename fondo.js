class fondo{

    
    constructor(){
        
    }
    
    dibujar(){
        noStroke();
        
        //let colorFondo = miPaleta.darColor();
        
        fill(random(255),0,0);
        rect(0,0,displayWidth,displayHeight);
        //rect(this.x, this.y, this.ancho, this.alto);

        
        /*
        noStroke();
        fill(200,0,0);
        //rect(0, 0, random(displayHeight), random(displayWidth));
        */
    }
}


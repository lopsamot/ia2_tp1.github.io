class base{

    
    constructor(x, y, ancho, alto, color){
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.color = color;
    }
    
    dibujar(){
        noStroke();
        fill(this.color);

        rect(this.x, this.y, this.ancho, this.alto);

    }
}

class Ventana {           
    constructor (x, y, ancho, alto, colorStroke, colorFill, colorRect) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.colorStroke = colorStroke;
        this.colorFill = colorFill;
        this.colorRect = colorRect;
    }

    dibujar() {
        
        
        push();
        translate(width, height);
        rotate(PI);

        fill(this.colorRect);
        rect(this.x - 50, this.y -50, this.ancho + 100, this.alto + 100);

        fill(this.colorFill);
        stroke(this.colorStroke);
        strokeWeight(8);
        rect(this.x, this.y, this.ancho, this.alto);
        line(this.x + this.ancho/2, this.y, this.x + this.ancho/2, this.y + this.alto);//vertical
        line(this.x + this.ancho/4, this.y, this.x + this.ancho/4, this.y + this.alto);
        line(this.x + this.ancho/4 +this.ancho/2, this.y, this.x + this.ancho/4 + this.ancho/2, this.y + this.alto);
      
        pop();
        
    }
}
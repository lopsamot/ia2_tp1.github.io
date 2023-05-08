class figuras{
    constructor(x, y, ancho, alto, color){
        this.x = x;
        this.y = y;//random(displayHeight/2);
        this.ancho = ancho;
        this.alto = alto;
        this.color = color;

    }
    
    dibujar(){
        noStroke();
        fill(this.color);

        push();
        translate(width, height);
        rotate(PI);

        rect(this.x, this.y, this.ancho, this.alto);

        pop();
        /*
        fill(175,0,0);
        noStroke();
        rect(0,0, 180, 350);
      
        fill(255,0,0);
        stroke(0, 100, 205);
        strokeWeight(5);
        rect(45, 25, 90, 300);
      
      
        fill(30, 235, 15);
        noStroke();
        rect(200, 150, 200, 200);*/
    }
}
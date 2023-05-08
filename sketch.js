let miFondo;
let miBase = [];

let f = true;


let miFigura = [];
let cantidad = 15;

//let miPaleta = [] ;
//let color = [4];
let miPaleta;

function setup() {
  createCanvas(displayWidth, displayHeight);
  
 
  miPaleta = new paleta("data/ejemplo2.png");
  
  let colorPrueba = miPaleta.darColor();
  print("colorPrueba", colorPrueba);
  
  miFondo = new fondo();
}

function draw() {
  //1536, 864
 
  while (f == true){
    miFondo.dibujar();
    
    for(let i = 0; i < cantidad - 12; i++){
      
      let esteColor = miPaleta.darColor();

      miBase [i] = new base(random(displayWidth), 714, random(400, 1000), random(30, 170), esteColor);
      miBase[i].dibujar();
    }

    for(let i = 0; i <cantidad; i++){
      
      let esteColor = miPaleta.darColor();
     
      miFigura [i] = new figuras(random(displayWidth), 150, random(200, 400), random(200, 200 * 5), esteColor);
      miFigura[i].dibujar();
      
      print("esteColor", esteColor);
      //print(miFigura[i].x);
    }

    for(let i = 0; i < random(2, 5); i++){

      let stroke = miPaleta.darColor();
      print("stroke", stroke);
      
      let fill = miPaleta.darColor();
      print("fill", fill);
      
      let rect  = miPaleta.darColor();
      print("rect", rect);

      let ventana1 = new Ventana(random(displayWidth), 200, random(100, 300), random(200 *2.5, 200 * 3.4), stroke, fill, rect);
      ventana1.dibujar();
      
    }
     f = false;
  }
}
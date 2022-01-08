
class Bichodomar {
  x:number;
  y:number;
  nado:number;
  tub_img:p5.Image;

  constructor(x:number,y:number,nado:number,tub_img:p5.Image;){

    this.x = x
    this.y = y
    this.nado = nado
    this.tub_img = 
  }


}



let tub_img:p5.Image;
let x:number = 1
let y:number = 1
let nado = 100

function preload(){
  tub_img= loadImage(
    '../sketch/tubok.gif',
     ()=> console.log ("imagem falhou"),
     ()=> console.log ("imagem carregou")
  );
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    x--;
  } else if (keyCode === RIGHT_ARROW){
    x++;
  } else if( keyCode === UP_ARROW){
    y--;
  } else if( keyCode === DOWN_ARROW){
    y++;
  }
}

function setup() {
  createCanvas(500,500);
  
}
  
function draw() {
  background(0);
  image(tub_img, x * nado, y* nado, nado, nado*0.5);

}


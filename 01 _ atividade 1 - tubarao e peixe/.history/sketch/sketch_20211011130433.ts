
class Bichodomar {
  x:number;
  y:number;
  nado:number;
  tub_img:p5.Image;

  constructor(x:number,y:number,nado:number,image:p5.Image){

    this.x = x;
    this.y = y;
    this.nado = nado;
    this.tub_img = image;
  }

  draw(){
    image(this.tub_img, this.x*this.nado, this.y*this.nado, this.nado,this.nado*0.5)
}




let x:number = 1;
let y:number = 1;
let nado = 100;
let tubarao: Bichodomar;
let peixe: Bichodomar;

function preload(){
  tub_img= loadImage(
    '../sketch/tubok.gif',
     ()=> console.log ("imagem falhou"),
     ()=> console.log ("imagem carregou")
  );

  tub_img= loadImage(
    '../sketch/tubok.gif',
     ()=> console.log ("imagem falhou"),
     ()=> console.log ("imagem carregou")
  );
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    tubarao.x--;
  } else if (keyCode === RIGHT_ARROW){
    tubarao.x++;
  } else if( keyCode === UP_ARROW){
    tubarao.y--;
  } else if( keyCode === DOWN_ARROW){
    tubarao.y++;
  }
}

function setup() {
  createCanvas(500,500);
  tubarao = new Bichodomar(0,0,100,tub_img);
  
}
  
function draw() {
  background(0);
  image(tub_img, x * nado, y* nado, nado, nado*0.5);
  tubarao.draw();

}


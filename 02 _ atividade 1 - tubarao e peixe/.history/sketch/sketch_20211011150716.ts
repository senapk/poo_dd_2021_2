
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

  draw():void {
    image(this.tub_img, this.x*this.nado, this.y*this.nado, this.nado,this.nado*0.5)
  }
}

class Board {
  nl:number;
  nc:number;
  nado:number;
  background: p5.Image;

  constructor(nl:number,nc:number,nado:number,background:p5.Image){
    this.nl= nl;
    this.nc = nc;
    this.nado = nado;
    this.background = background;
  }

  draw(): void {
    image(this.background,0,0,this.nc*this.nado,this.nl*this.nado)
  }

}



let tub_img:p5.Image;
let pei_img:p5.Image;
let board_img:p5.Image;

let tubarao: Bichodomar;
let peixe: Bichodomar;
let board: Board;


function carregarimagem(path:string):p5.Image {
  return loadImage(
    path,
    ()=> console.log ("carregando" + path + "imagem carregou"),
    ()=> console.log ("carregando" + path + "imagem falhou")
  )

}

function preload(){
  tub_img = carregarimagem('../sketch/tubok.gif');
  pei_img= carregarimagem('../sketch/peixeok.gif');
  board_img = carregarimagem("../sketch/fundodomar.gif");
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

  if (keyCode === "A".charCodeAt (0)){
    peixe.x--;
  } else if (keyCode === "D".charCodeAt (0)){
    peixe.x++;
  } else if( keyCode === "W".charCodeAt (0)){
    peixe.y--;
  } else if( keyCode === "S".charCodeAt (0)){
    peixe.y++;
  }
}

function setup() {
  
  tubarao = new Bichodomar(0,0,275,tub_img);
  peixe = new Bichodomar(2,2,75,pei_img);
  board = new Board 
  createCanvas(500,500);
  
}
  
function draw() {

  
  //background(0);
  tubarao.draw();
  peixe.draw();

}

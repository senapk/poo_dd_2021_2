
//roxo Metodo
//azul atributo 

/// classe dos 
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

  draw(): void {
    image(this.tub_img, this.x*this.nado, this.y*this.nado, this.nado,this.nado/2);
    /// posição de x,y,largura e altura, aqui como preciso que o peixe seja menor 
    /// que o tubarão, e partindo de quem as imagens já tem tamanhos diferentes eu resolvi dividir a altura por 2 e la no setup
    /// multiplicar por 2 apenas o tamanho do tubarão 
    /// deixando o peixe menor e o tubarão maior 
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
    for ( let x = 0; x < this.nc; x++){
      for ( let y = 0; y < this.nl; y++){
        noFill();
        stroke(0)
        strokeWeight(2)
        rect(x*this.nado,y*this.nado,this.nado,this.nado);
      }
    }
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

  let size = 100
  tubarao = new Bichodomar(2,2,size*2,tub_img);
  /// variavel = recebe nova classe tal (xinicial,yfinal,tamanho, e qual imagem)
  peixe = new Bichodomar(1,1,size,pei_img);
  board = new Board (5,6,size,board_img);
  createCanvas(board.nc*size,board.nc*size);


}
  
function draw() {

  
  //background(0);
  board.draw();
  tubarao.draw();
  peixe.draw();
  
  //funcoes de update aqui pra tubarao e peixe 

}


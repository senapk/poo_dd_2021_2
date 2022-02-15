
/// continuando aqui essa versão já a apartir do processo de instaciamento da classe

class bichu {
  x: number;
  y: number;
  passo:number
  tub_img:p5.Image;

  constructor(x:number, y:number, passo:number, tub:p5.Image){
    this.x = x;
    this.y = y;
    this.passo = passo;
    this.tub_img = tub_img; 
 
  } 

  draw(): void{
    image(tub_img, this.x * this.passo, this.y * this.passo, this.passo, this.passo);
  }
}


let tub_img:p5.Image
let tubarao:bichu;

function preload(): void {

  tub_img = loadImage(
    '../sketch/tub.gif',
    () => console.log("imagem carregada"),
    () => console.log("imagem não carregada")
  );
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    this.x--;
  } else if (keyCode === RIGHT_ARROW){
    this.x++;
  } else if (keyCode === UP_ARROW){
    this.y--;
  } else if( keyCode === DOWN_ARROW){
    this.y++;
  }

}
function setup(){
  createCanvas(500,500);
  tubarao = new bichu(0,0,100,tub_img);
}

function draw () {

  tub_img.draw ();
}
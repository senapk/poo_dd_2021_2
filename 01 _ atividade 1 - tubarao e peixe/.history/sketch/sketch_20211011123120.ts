
let tub_img:p5.Image;
let x:number = 0
let y:number = 0
let nado = 200

function preload(){
  tub_img= loadImage(
    '../sketch/tubok.gif',
     ()=> console.log ("imagem falhou"),
     ()=> console.log ("imagem carregou")
  );
}
function setup() {
  createCanvas(500,500);
  
}
  
function draw() {
  background(0);
  image(tub_img, x * nado, y* nado, nado*0.5 , nado);

}


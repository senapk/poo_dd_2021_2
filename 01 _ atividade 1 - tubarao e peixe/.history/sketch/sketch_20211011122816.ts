
let tub_img:p5.Image;
let x:Number = 0
let y:number = 0
let nada = 100

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
  image(tub_img,0,0,200,100);

}

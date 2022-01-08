
let tub_img:p5.Image;
let x = 0
let y = 0
let nadada = 100

function preload(){
  tub_img= loadImage(
    '../sketch/tubok.gif',
     ()=> console.log ("imagem falhou"),
     ()=> console.log ("imagem carregou")
}
function setup() {
  createCanvas(500,500);
  
}
  
function draw() {
  background(0);
  image(tub_img,0,0,200,100);

}



let tub_img:p5.Image;

function imagem(path:string):p5.Image{
  return loadImage(path);
}

function preload(){
  tub_img = imagem('../sketch/tub.gif');
}


function setup() {
    createCanvas(500,500);
  }
  
function draw() {

  image(tub_img,0,0,400,400);

}


let tub_img:p5.Image;

function setup() {
  createCanvas(500,500);
  background(0);
}
  
function draw() {

  image(tub_img,0,0,200,100);

}

function preload(){
  tub_img= loadImage('../sketch/tubok.gif');
}
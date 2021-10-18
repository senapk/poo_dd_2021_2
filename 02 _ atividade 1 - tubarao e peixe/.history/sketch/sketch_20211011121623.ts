
let tub_img:p5.Image;


function preload(){
  tub_img= loadImage('../sketch/tubok.gif');
}


function setup() {
  background(0);
  createCanvas(500,500);
  
}
  
function draw() {

  image(tub_img,0,0,200,100);

}

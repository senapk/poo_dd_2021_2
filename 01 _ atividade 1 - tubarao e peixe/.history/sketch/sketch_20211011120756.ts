
let tub_img:p5.Image;

function image(path:string):p5.Image{
  return loadImage(path);
}

function preload(){
  tub_img = createImg('../sketch/tub.gif');
}


function setup() {
    createCanvas(500,500);
  }
  
function draw() {

}

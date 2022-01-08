
let tub_img:p5.Image;


function preload(){
  tub_img= image('../sketch/tub.png');
}


function setup() {
    createCanvas(500,500);
  }
  
function draw() {

  image(tub_img,0,0,400,400);

}

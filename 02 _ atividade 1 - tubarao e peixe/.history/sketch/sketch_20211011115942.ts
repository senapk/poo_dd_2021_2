

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(10)
  }
  
function draw() {
    
  ///  background(0);
    
stroke(0,255,0,500);
strokeWeight(5);
line(0,random(height),width,random(height));
  
stroke(0,0,0,500);
strokeWeight(5);
line(random(width),0,random(width),height)
    
  }

/// segundo a aula, substituiremos o valor repetido na linha 1 e na linha 2 por 
/// uma variável, eu só não entendo como isso de forma mágica faz a linha ficar exatamente
/// reta, já que é o mesmo valor, mas apenas transformada em uma variável, ficando assim :


function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(2)
  }
  
function draw() {
    background(0);
    
  
stroke(0,20,50,500);
strokeWeight(5);
let L1Xlargura = random(width);
line (L1Xlargura,0,L1Xlargura,height);
  
stroke(0,255,0,500);
strokeWeight(5);
let L2Yaltura = random(height)
line(0,L2Yaltura,width,L2Yaltura);
    
  }

/// pra finalizar e criar a mira, precisamos colocar uma bolinha exatamente em cima
/// do encontro das duas linhas, como o circulo é composto de 3 valores, 2 x e y e 1 do diametro
/// colocaremos os valores de x e y das linhas, para que a bolinha acompanhe, ficando:


function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(2)
  }
  
function draw() {
    
background(0);
    
  
stroke(0,20,50,500);
strokeWeight(5);
let L1Xlargura = random(width);
line (L1Xlargura,0,L1Xlargura,height);
  
stroke(0,255,0,500);
strokeWeight(5);
let L2Yaltura = random(height)
line(0,L2Yaltura,width,L2Yaltura);
  
noStroke(); 
circle(L1Xlargura,L2Yaltura,80);
    
  }

  /// adicionei noStroke() para tirar o contorno
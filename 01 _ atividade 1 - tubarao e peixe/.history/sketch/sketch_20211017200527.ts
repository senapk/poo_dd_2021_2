
/// BICHOS DO MAR 
/// classe para criar bichos do oceano, tendo como atributos um valor de x e y, um tamanho que apartir desse valor
// definirá a posição e movimento do animal (que no caso coloquei como "nado") e dentro dessa classe tem também
// uma imagem que é do tipo.p5

class Bichodomar {
  x:number;
  y:number;
  nado:number;
  tub_img:p5.Image;

  /// CONSTRUCTOR 
  /// ao que entendi o constructor é  o que é importante para instanciar a classe e 
  /// fazer sugir o objeto, que é criado la na função setup(), usando o "new", que precisa
  // portanto ter valores entre parenteses que correspondam aos atributos definidos ao criar a classe
  // no caso o prof criou uma variavel que chamou de size e substituiu o valor de nado
  // mesmo sendo como padrão definido o mesmo valor = 100, não entendi o porque. 
  // peixe = new Bichodomar(1,1,size,pei_img);

  constructor(x:number,y:number,nado:number,image:p5.Image){

    this.x = x;
    this.y = y;
    this.nado = nado;
    this.tub_img = image;
  }

  // pq que o draw ele não fica só la em baixo, pq aqui tb tem que ter um draw ? Não é só pra ter um draw?
  draw(): void { 
    image(this.tub_img, this.x*this.nado, this.y*this.nado, this.nado,this.nado/2);
    
    /// explicação do que é image()
    /// posição de x,y,largura e altura, aqui como preciso que o peixe seja menor 
    /// que o tubarão, e partindo de quem as imagens já tem tamanhos diferentes eu resolvi dividir a altura das duas imagens por 2 e la no setup
    /// multiplicar por 2 apenas o tamanho do tubarão 
    /// deixando o peixe menor e o tubarão maior // isso buga um pouco a forma como eles se movimentam, principalmente o tubarão, mas 
    // ele não fica achatado e feio 
  }
}

/// OCEANO
/// classe para criar o fundo do mar, que tem como atributos numero de linhas e colunas
/// um tamanho definido como nado, e um background bichos do oceano, tendo como atributos um valor de x e y, um tamanho que apartir desse valor
// definirá a posição e movimento do animal (que no caso coloquei como "nado") e dentro dessa classe tem também
// uma imagem que é do tipo.p5

class Oceano {
  nl:number;
  nc:number;
  nado:number;
  background: p5.Image;

  constructor(nl:number,nc:number,nado:number,background:p5.Image){
    this.nl= nl;
    this.nc = nc;
    this.nado = nado;
    this.background = background;
  }

/// qual a diferença desse draw que tem dentro das classes para o lá de baixo ? Não é só pra ter um draw?
  draw(): void {
    image(this.background,0,0,this.nc*this.nado,this.nl*this.nado)
    for ( let x = 0; x < this.nc; x++){
      for ( let y = 0; y < this.nl; y++){
        noFill();
        stroke(0)
        strokeWeight(2)
        rect(x*this.nado,y*this.nado,this.nado,this.nado);
      }
    }
  }

}

/// variaveis relacionadas a criação da imagem p5, do tubarão, peixe e fundo. 

let tub_img:p5.Image;
let pei_img:p5.Image;
let ocean_img:p5.Image;

// variaveis relacionadas a criação de nobos objetos a partir das classes, bicho do mar e board 

let tubarao: Bichodomar;
let peixe: Bichodomar;
let oceano: Oceano;


/// LOAD IMAGE 
//  aa função loadImage ela carrega a image de um caminho previamente construido, como no caso
/// das imagens que colocamos na pasta do projeto, então usando o loadimage, carregamos essa imagem 
/// através da função que retorna como p5.image, nesse processo podemos acionar outras duas funções, dentro da função
/// que são acionadas, mostrando um status e dizendo se a imagem foi carregada ou não. 

function carregarimagem(path:string):p5.Image {
  return loadImage(
    path,
    ()=> console.log ("carregando" + path + "imagem carregou"),
    ()=> console.log ("carregando" + path + "imagem falhou")
  )

}

/// PRELOAD()
//Chamada diretamente antes da setup () , a função preload () 
//é usada para lidar com o carregamento assíncrono de arquivos externos 
//de forma bloqueadora. Se uma função de pré-carregamento for definida, setup () 
//irá esperar até que qualquer chamada de carregamento dentro tenha terminado. 

function preload(){
  tub_img = carregarimagem('../sketch/tubok.gif');
  pei_img= carregarimagem('../sketch/peixeok.gif');
  ocean_img = carregarimagem("../sketch/fundodomar.gif");
}

function keyPressed(){
    /// no key pressed usamos duas possibilidades, na primeira a condição é feita a partir das teclas de seta do teclado
    /// no outro usa-se a função "A".charCodeat (0) , pra usar o codigo 


  if (keyCode === LEFT_ARROW){
    tubarao.x--;
  } else if (keyCode === RIGHT_ARROW){
    tubarao.x++;
  } else if( keyCode === UP_ARROW){
    tubarao.y--;
  } else if( keyCode === DOWN_ARROW){
    tubarao.y++;
  }



  if (keyCode === "A".charCodeAt (0)){
    peixe.x--;
  } else if (keyCode === "D".charCodeAt (0)){
    peixe.x++;
  } else if( keyCode === "W".charCodeAt (0)){
    peixe.y--;
  } else if( keyCode === "S".charCodeAt (0)){
    peixe.y++;
  }
}

/// FUNÇÃO SETUP 
   //// É chamada uma vez apenas onde o programa é iniciado. É usado para definir propriedades
   //// iniciais do ambiente, como tamanho da tela e cor de 
   //// fundo, e para carregar mídia, como imagens e fontes, 
   //// conforme o programa é iniciado. Só pode haver uma 
   //// função setup () para cada programa e ela não deve 
   //// ser chamada novamente após sua execução inicial.
  ////Nota: Variáveis ​​declaradas em setup () não são acessíveis em outras funções, incluindo draw () .

function setup() {
  
  let size = 100
  tubarao = new Bichodomar(2,2,size*2,tub_img);
  /// variavel = recebe nova classe tal (xinicial,yfinal,tamanho, e qual imagem)
  peixe = new Bichodomar(1,1,size,pei_img);
  oceano = new Oceano (5,6,size,ocean_img);
  createCanvas(oceano.nc*size,oceano.nc*size);


}
  
function draw() {

  
  //background(0);
  oceano.draw();
  tubarao.draw();
  peixe.draw();
  
  //funcoes de update aqui pra tubarao e peixe 

}


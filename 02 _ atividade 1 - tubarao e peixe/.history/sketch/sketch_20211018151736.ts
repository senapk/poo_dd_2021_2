
/// BICHOS DO MAR 
/// classe para criar bichos do oceano, tendo como atributos um valor de x e y, um tamanho que apartir desse valor
// definirá a posição e movimento do animal (que no caso coloquei como "nado") e dentro dessa classe tem também
// uma imagem que é do tipo.p5

class Bichodomar {
  x:number;
  y:number;
  nado:number;
  img:p5.Image;
  vivo:boolean;

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
    this.img = image;
    this.vivo = true;
  }

  // pq que o draw ele não fica só la em baixo, pq aqui tb tem que ter um draw ? Não é só pra ter um draw?
  draw(): void { 
    if(!this.vivo){
      return
    }
    image(this.img, this.x*this.nado, this.y*this.nado, this.nado,this.nado);
    
    /// explicação do que é image()
    /// posição de x,y,largura e altura, aqui como preciso que o peixe seja menor 
    /// que o tubarão, e partindo de quem as imagens já tem tamanhos diferentes eu resolvi dividir a altura das duas imagens por 2 e la no setup
    /// multiplicar por 2 apenas o tamanho do tubarão 
    /// deixando o peixe menor e o tubarão maior // isso buga um pouco a forma como eles se movimentam, principalmente o tubarão, mas 
    // ele não fica achatado e feio 
  }
}

/// SOBRE  OCEANO
/// classe para criar o fundo do mar, que tem como atributos numero de linhas e colunas
/// um tamanho definido como nado, e um background do tipo p5.image.

class Oceano {
  nl:number;
  nc:number;
  nado:number;
  background: p5.Image;

  constructor(nc:number,nl:number,nado:number,background:p5.Image){
    this.nl= nl;
    this.nc = nc;
    this.nado = nado;
    this.background = background;
  }

/// DUVIDA 1 
// qual a diferença desse draw que tem dentro das classes para o lá de baixo ? Não é só pra ter um draw?

//aqui se faz um for para que a partir de um quadrado que não tem preenchimento, esse quadrado seja repetido 
///  onde o valor de x é inicialmente 0 e se  x for menor que o valor de numero de colunas continua desenhado quadrinho na vertical até parar 
// que é algo que acho  que tem a ver com o tamanho da tela definido em createcanvas, será? 
// o mesmo para o numero de linhas 

  draw(): void {
    image(this.background,0,0,this.nc*this.nado,this.nl*this.nado)
    for ( let x = 0; x < this.nc; x++){ /// esse numero de linhas e colunas será definido lá no setup quando for criado com o new o objeto
      for ( let y = 0; y < this.nl; y++){ /// lebrando a estrutura do for: é instrução inicial executa apenas uma vez + condicao para execucção da terceira instrução e terceira instrunção 
        noFill();
        stroke(0)
        strokeWeight(2)
        rect(x*this.nado,y*this.nado,this.nado,this.nado);
      }
    }
  }

}

let tub_img:p5.Image;
let tub_imgreves:p5.Image;
let pei_img:p5.Image;
let pei_imgreves:p5.Image;
let peixe_morto:p5.Image;

let ocean_img:p5.Image;
let nci = 0
let nli = 0 
let ncf = 5
let nlf = 4

// VARIAVEIS /\ \/ 
// variaveis relacionadas a criação da imagem p5, do tubarão, peixe e fundo. 

// variaveis relacionadas a criação de nobos objetos a partir das classes, bicho do mar e board 

let tubarao: Bichodomar;
let peixe: Bichodomar;
let oceano: Oceano;


/// LOAD IMAGE 
//  a função loadImage ela carrega a image de um caminho previamente construido, como no caso
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
  tub_imgreves = carregarimagem('../sketch/tubokrevers.gif');

  pei_img= carregarimagem('../sketch/peixeok.gif');
  pei_imgreves = carregarimagem('../sketch/peixeokrevers.gif');
  ocean_img = carregarimagem("../sketch/fundodomar.gif");
  peixe_morto = carregarimagem('../sketch/peimorto.png');
}

function keyPressed(){
    /// no key pressed usamos duas possibilidades, na primeira a condição é feita a partir das teclas de seta do teclado
    /// no outro usa-se a função "A".charCodeat (0) , pra usar o codigo definido em unicode relacionado a letra A 

let tubsleepx = tubarao.x;
let peisleepx = peixe.x;
let tubsleepy = tubarao.y;
let peisleepy = peixe.y;


  if (keyCode === LEFT_ARROW){
    tubarao.x--;
      tubarao.img = tub_img
  } else if (keyCode === RIGHT_ARROW){
    tubarao.x++;
      tubarao.img = tub_imgreves;
  } else if( keyCode === UP_ARROW){
    tubarao.y--;
  } else if( keyCode === DOWN_ARROW){
    tubarao.y++;
  }

  if (keyCode === "A".charCodeAt (0)){
    peixe.x--;
    peixe.img = pei_imgreves;
  } else if (keyCode === "D".charCodeAt (0)){
    peixe.x++;
    peixe.img = pei_img
  } else if( keyCode === "W".charCodeAt (0)){
    peixe.y--;
  } else if( keyCode === "S".charCodeAt (0)){
    peixe.y++;
  }


/// matando o peixe

  if (tubarao.x === peixe.x && tubarao.y === peixe.y){
    peixe.img = peixe_morto && peixe.v
  if (tubarao.x === peixe.x && tubarao.y === peixe.y){
    peixe.img = false;
  }

/// coluna é x / largura ci = 0 e cf = 5 
/// linha é y / altura li = 0 e lf = 4
/// usar os valores de ci - 1 cf +1 além de li-1 e lf+1 estabelece os limites da tela
/// evitando a saida dos bichos 

if (tubarao.x === nci-1){
    tubarao.x = tubsleepx;
  }else if (tubarao.y === nli-1){
    tubarao.y = tubsleepy;


  }else if (tubarao.x === ncf+1){
    tubarao.x = tubsleepx;
  }else if (tubarao.y === nlf+1){
    tubarao.y = tubsleepy;
  } 

if ( peixe.x === nci-1 ){
    peixe.x = peisleepx;
  } else if ( peixe.y === nli-1){
    peixe.y = peisleepy;


  }else if ( peixe.x === ncf+1 ){
    peixe.x = peisleepx;
  } else if ( peixe.y === nlf+1){
    peixe.y = peisleepy;
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
 /// ao inves de criar esse size aqui no setup, eu não poderia ter dado o valor de nado = 100 e definido isso fora da setup?
 // e que aqui seria usado com esse proposito ?  

  let size = 100
  tubarao = new Bichodomar(3,2,size,tub_img);
  peixe = new Bichodomar(2,2,size,pei_img);
  oceano = new Oceano (6,5,size,ocean_img); //// definindo aqui o numero de linhas e colunas em 5 e 6
  createCanvas(oceano.nc*size*2,oceano.nl*size);
 //  o create canvas Cria um elemento de tela no documento e define suas dimensões em pixels, aqui ao inves de x e y, usamos
 // oceano.nc como x e oceano.nc como y 

 /// variavel = recebe nova classe tal (xinicial,yfinal,tamanho, e qual imagem)

}
  
function draw(){

  oceano.draw();
  tubarao.draw();
  peixe.draw();
  

  /// aqui as variaveis definidas no setup são chamadas em draw. 
 

}


//// parte inicial do código, até o momento em que se cria a classe board(que chamo de mesadejogo)
//// começando criando a classe bolha, algumas observações:
//// o raio vem com o static que definie o raio como um tamanho e propriedade da classe, ao qual todos os objetos vão ter. 
/// todas as bolhas começam "vivas", ambas essas caracteristicas não são inicializadas no constructor então devem ao menos
// de partida ter um valor padrão. Não entendi pq vitalidade tb nao vem com o estatic, e se vitalidade não ta dentro
/// dessa possibilidade do static, pq não ta inicializada no constructor ? 
// Tudo que é estatico pertence a classe. 


  //class Bolha {

 // x:number
  //y:number
 // letra:string
 // velocidade:number

 // static diametro: number = 30
 // vitalidade:boolean = true;

 // constructor(x: number, y:number, letra:string, velocidade:number){
 //     this.x = x
 //     this.y = y
  //    this.letra = letra
  //    this.velocidade = velocidade
 // }   
  
  //// aqui update para o valor de y ser incrementado do valor de y + velocidade 

 // update(): void {
 ///   this.y = this.y + this.velocidade;
 // }

  //draw():void {
      /// propriedade da bolha 
      // o circulo é a posição de x e y e o diametro, que no caso ta sendo 2 x raio
      //fill(225);
      //stroke(225);
      //circle(this.x,this.y,Bolha.diametro);
      ///propriedades do texto dentro da bolha 
     // fill(0);
      //stroke(0);
      //textSize(15);
      //text(this.letra,this.x - 5, this.y + 5 );

  //}
 //}

//let bolha1:Bolha;


//function setup() {
/// createCanvas(500,500); /// ajustar um tamanho melhor pra tela ou isso vai influenciar em algo do posicionamento e etc?
////  bolha1 = new Bolha (100,100,"A",1);

//}

//function draw(){

 // background(100);
 /// bolha1.update();
 // bolha1.draw();
  
//}



class Bolha {

  x:number
  y:number
  letra:string
  velocidade:number

  static diametro: number = 30
  vitalidade:boolean = true;

  constructor(x: number, y:number, letra:string, velocidade:number){
      this.x = x
      this.y = y
      this.letra = letra
      this.velocidade = velocidade
  }   
  
  //// aqui update para o valor de y ser incrementado do valor de y + velocidade 

  update(): void {
    this.y = this.y + this.velocidade;
  }

  draw():void {
      /// propriedade da bolha 
      // o circulo é a posição de x e y e o diametro, que no caso ta sendo 2 x raio
      fill(171,0,6);
      stroke(171,0,6);
      circle(this.x,this.y,Bolha.diametro);
      ///propriedades do texto dentro da bolha 
      fill(0);
      stroke(0);
      textSize(15);
      text(this.letra,this.x - 5, this.y + 5 );

  }
}


/// aqui o professor criar um board que to chamando de mesadojogo, onde criamos um vetor bolhas: Bolha [] e esta classe
/// fica responsável por gerenciar as bolhas, o push. adiciona uma nova bolha ao vetor 
class Mesadejogo {
  bolhas: Bolha [] = [];
  tempodebolhas: number = 30;
  contador: number = 0;
  constructor() {
    this.bolhas = [ new Bolha (100,100,"b",1.2)];
    this.bolhas.push(new Bolha(150,100,"o",1.4));
    this.bolhas.push(new Bolha(200,100,"r",1.2));
    this.bolhas.push(new Bolha(250,100,"n",1.5));
    this.bolhas.push(new Bolha(300,100,"o",1.2));
    this.bolhas.push(new Bolha(350,100,"u",1.3));
    this.bolhas.push(new Bolha(400,100,"t",1.2));
    this.bolhas.push(new Bolha(450,100,":)",1.2));
  }

  /// a classe tem tb um update e um draw próprio
  // no update fazemos um for que vai percorrer a lista

  update():void{

    for(let bolha of this.bolhas)
      bolha.update();

  }

  bolhasportempo(): void{
    this.contador -= 1; 
    if ( this.contador <= 0 ){
      this.adcBolhas();
      this.contador = this.tempodebolhas;
    }
  }

  adcBolhas():void{
    let x = random (0, width - Bolha.diametro)
    let y = - Bolha.diametro;
    let letra = random (["a","b",""])
  }

  /// no draw a mesma lógica do for, mas com a funcao draw 
  draw():void{
    for(let bolha of this.bolhas)
      bolha.draw();

  }

}


/// agora vamos criar telas pro jogo, então assim como as bolhas estao dentro da classe mesa de jogo, a mesa de jogo estará dentro
/// dessa nova classe que é jogo 

class Jogo {
  mesadejogo: Mesadejogo;
  ativaJogo: () => void;
  constructor( ){
    this.mesadejogo = new Mesadejogo();
    this.ativaJogo = this.jogando;
  }


  /// apaga o update aqui e coloca dentro do draw, depois renomeamos draw para jogando

  jogando(): void {
    background(100)
    this.mesadejogo.update()
    this.mesadejogo.draw();
  }

  fimdejogo(): void{
    background(255,0,0)
    fill(0)
    textSize(100);
    text("Game Over",50,300);
  }
}


/// let bolha1:Bolha; substitui por let mesadejogo: Mesadejogo que depois substitui por:

let jogo: Jogo 

function setup() {
  createCanvas(800,600); /// ajustar um tamanho melhor pra tela ou isso vai influenciar em algo do posicionamento e etc?
  frameRate(30);
  // cria aqui o objeto
  jogo = new Jogo();

}

function draw(){

  // e aqui o draw do jogo, ja que o update ficou la em cima e dentro do draw( nomeado como jogando) então a classe bolha fica sendo executada dentro da classe mesa de jogo, e a mesa de jogo dentro de jogo 
  jogo.ativaJogo();
  ///ogo.fimdejogo();
  
}
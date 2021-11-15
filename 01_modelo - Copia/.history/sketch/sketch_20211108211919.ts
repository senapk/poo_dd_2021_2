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
      fill(225);
      stroke(225);
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
  constructor() {
    this.bolhas = [ new Bolha (100,100,"c",1.2)];
    this.bolhas.push(new Bolha(150,100,"a",1.4));
    this.bolhas.push(new Bolha(200,100,"n",1.2));
    this.bolhas.push(new Bolha(250,100,"s",1.5));
    this.bolhas.push(new Bolha(300,100,"a",1.2));
    this.bolhas.push(new Bolha(350,100,"d",1.3));
    this.bolhas.push(new Bolha(400,100,"a",1.2));
    this.bolhas.push(new Bolha(450,100,"n",1.2));
  }

  /// a classe tem tb um update e um draw próprio
  // no update fazemos um for que vai percorrer a lista

  update():void{

    for(let bolha of this.bolhas)
      bolha.update();

  }


  /// no draw a mesma lógica do for, mas com a funcao draw 
  draw():void{
    for(let bolha of this.bolhas)
      bolha.draw();

  }

}


/// let bolha1:Bolha; substitui por:

let mesadejogo: Mesadejogo


function setup() {
  createCanvas(500,500); /// ajustar um tamanho melhor pra tela ou isso vai influenciar em algo do posicionamento e etc?
  // cria aqui o objeto
  mesadejogo = new Mesadejogo ();

}

function draw(){

  background(100);
  // e aqui o draw e update de mesadejogo, então a classe bolha fica sendo executada dentro da classe mesa de jogo. 
  mesadejogo.update();
  mesadejogo.draw();
  
}
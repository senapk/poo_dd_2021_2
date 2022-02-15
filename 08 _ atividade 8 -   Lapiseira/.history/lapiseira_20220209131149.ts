import { Console } from "console";


const readline = require ("readline-sync");
let input = () => readline.question(); /// função pra ler o que é escrito que funciona através dos pacotes que foram instalados
let write = (x: any ) => process.stdout.write(" " + x); /// aqui é pra não quebrar a linha 

class Lapiseira {
    calibre: number; // 0.7, 0.9
    bico: number;
    temGrafiteNoBico: boolean;
    grafites: Array<Grafite>;
    grafiteEmUso: Grafite;

    constructor(calibre: number, capacidadeDoTambor: number) {
        this.calibre = calibre;
        this.bico = 0;
        this.temGrafiteNoBico = false;
        this.grafites = new Array<Grafite>(capacidadeDoTambor);
        this.grafiteEmUso = grafiteEmUso
    }

    inserirGrafiteNoTambor(calibre: number, dureza: string, tamanho: number): void  {
        if(calibre != this.calibre) {
            console.log('calibre incompativel!');
        }

        else {
            let grafite = new Grafite(calibre, dureza, tamanho);

            this.grafites.push(grafite);
        }

    }

    inserirNoBico(): void {
        if(this.temGrafiteNoBico == true) { // [this.temGrafiteNoBico]
            this.removerGrafiteDoBico();
            this.removerGrafiteDoTambor();
            this.inserir();
            
            return;
        }
        
        this.inserir();
    }

    inserir(): void {
        this.bico++;
        this.temGrafiteNoBico = true;
        this.grafiteEmUso = this.removerGrafiteDoTambor(); // retorna o elemento removido no caso o Grafite
    }

    removerGrafiteDoBico(): any {
        if(this.bico <= 0)
            return;

        this.bico--;
        this.temGrafiteNoBico = false;
    }

    removerGrafiteDoTambor(): any {
        if(this.grafites.length > 0){
            return this.grafites.pop(); // além de remover o último elemento no Array(vetor), também retorna o elemento removido no caso o Grafite.
        }

        console.log('os grafites do tambor acabaram');
    }

    escrever(totalDeFolhas: number): any {
        if (!this.temGrafiteNoBico){ // mesma coisa que isso: [this.temGrafiteNoBico == false]
            console.log('não tem grafite!');
            return;
        }

        if (!this.possoEscrever()){
            console.log('nao há tamanho suficiente para escrever com o grafite em uso. por favor recarregue-o!');
            return;
        }

        let grafiteGasto = this.grafiteEmUso.tamanho * totalDeFolhas;
        this.gastarGrafite(grafiteGasto);

        if (this.acabouOGrafite()) {
            this.removerGrafiteDoBico();
            this.grafiteEmUso = null
        }
    }
    
    possoEscrever(): boolean {
        return this.grafiteEmUso.tamanho > 1;
    }

    acabouOGrafite(): boolean {
        return this.grafiteEmUso.tamanho <= 1;
    }
    
    gastarGrafite(grafiteGasto: number): any {
        let tamanhoDoGrafite = this.grafiteEmUso.tamanho - grafiteGasto;
        if (tamanhoDoGrafite <= 1) {
            console.log('nao há tamanho suficiente para escrever com o grafite em uso. por favor recarregue-o!');
            return;
        }

        this.grafiteEmUso.tamanho -= tamanhoDoGrafite;
    }

    toString() {
        return `calibre: ${this.calibre} temGrafiteNoBico: ${this.temGrafiteNoBico} grafites no tambor: ${this.grafites.length}`
    }
}

class Grafite {
    calibre: number;
    dureza: string;
    tamanho: number;

    constructor(calibre:number, dureza:string, tamanho:number){
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;    
    }

    public getCalibre(){
        return this.calibre;
    }

    public setCalibre(calibre: number) {
        this.calibre = calibre;
    }

    public getDureza(){
        return this.dureza;
    }

    public setDureza(dureza: string){
        this.dureza = dureza;
    }

    public getTamanho(){
        return this.tamanho;
    }

    public setTamanho(tamanho: number){
        this.tamanho = tamanho;
    }

    gastoPorFolha(): number {
        if (this.dureza === 'HB')
            return 1;
        else if (this.dureza === '2B')
            return 2;
        else if (this.dureza === '4B')
            return 4;
        else if (this.dureza === '6B')
            return 6;
        else
            return 0;
    }

}

class inicilizacao {
    criarLapiseira(): Lapiseira {
      write("digite o calibre da lapiseira");
      let calibre = input ();
      write("digite a capacidade do tambor")
      let capacidadeDoTambor = input();
    
      return new Lapiseira (calibre, capacidadeDoTambor);
    }
  
  
    help () {
      write ("comandos: \n");
      write ("iniciar: <calibre> <tamanho do tambor>")
      write ("inserirGrafiteNoTambor: <calibre> <dureza> <tamanho> ")
      write ("inserirGrafiteNoBico")
      write ("escrever: <total de folhas que deseja escrever>")
  
    }
    
    menu () {
  
      let lapiseira = this.criarLapiseira();
      while(true) {
        let linha = input();
        let palavras =  linha.split(" "); 

        if(palavras[0] == "sair") {
          break;
        } else if (palavras[0] == "iniciar"){
          write (" ESTA É SUA LAPISEIRA ｡◕‿◕｡ " + lapiseira + "\n");
        } else if (palavras[0] == "inserirGrafiteNoTambor"){
          lapiseira = new Lapiseira(palavras[1], palavras[2]);
        } else if (palavras[0] == "inserirGrafiteNoBico"){
          lapiseira.inserirGrafiteNoTambor(palavras[1], palavras[2], palavras[3]);
        } else if (palavras[0] == "escrever"){
          lapiseira.escrever(palavras[1]);
        } else {
          console.log("comando inválido, digite novamente! ")
        }
  
    }
  }}

    let iniciar = new inicilizacao();
    iniciar.menu();

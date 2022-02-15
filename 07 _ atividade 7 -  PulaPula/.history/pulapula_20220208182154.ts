
const readline = require ("readline-sync");
let input = () => readline.question(); /// função pra ler o que é escrito que funciona através dos pacotes que foram instalados
let write = (x: any ) => process.stdout.write(" " + x); /// aqui é pra não quebrar a linha 

class PulaPula {
    criancasNaFila: Array<Crianca> = new Array<Crianca>();
    criancasNoPulaPula: Array<Crianca> = new Array<Crianca>();

    constructor() {
        this.iniciarListas();
    }

    sairDoPulaPula(nome: string) {
        if (this.criancasNoPulaPula.length <= 0){ // testa se existe crianças no pula pula
            console.log('nao ha criancas no pula pula')
            return;
        } 
        
        let crianca = this.criancasNoPulaPula.find(x => x.getNome() === nome);

        this.criancasNoPulaPula = this.criancasNoPulaPula
            .filter(c => c.getNome() != crianca.getNome()); // remove do pula pula

        this.criancasNaFila.push(crianca); // e coloca a crianca no final da fila
    }

    inserirCriancaNaFila(nome: string, idade: number) {
        let crianca = new Crianca(nome, idade);
        this.criancasNaFila.push(crianca);
    }

    entrarNoPulaPula() {
        if(this.criancasNaFila.length > 0) {
            let crianca = this.criancasNaFila.shift();
            this.criancasNoPulaPula.push(crianca);
        }
    }

    iniciarListas() {

        this.criancasNaFila = [
            new Crianca("Bêbê Monstrinho", 10),
            new Crianca("Wellington Doido", 12),
            new Crianca("Olho da Barbie", 9),
            new Crianca("Gotenks na fusao errada", 11),
            new Crianca("Bin Malabim", 14),
            new Crianca("Eduardo Perna de Alicate", 12),
            new Crianca("Mimia Ragatanga", 7),
            new Crianca("Chupinha", 14),
            new Crianca("Socó", 12),
            new Crianca("Raimundo fei", 14),
            new Crianca("Magal", 12)
        ];

        this.criancasNoPulaPula = [
            new Crianca("Diarreira", 14),
            new Crianca("Ezequiel Monta Burra", 11),
            new Crianca("Inimigo da Beleza", 12),
            new Crianca("Coró dos Pao", 10),
            new Crianca("Fi do Bill", 11)
        ]
    }

}

class Crianca {
    nome: string;
    idade: number;

    constructor(nome:string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }

    getIdade() {
        return this.idade;
    }

    setIdade(idade: number) {
        this.idade = idade;
    }

    toString() {
        return ` [nome: ${this.nome} idade: ${this.idade}] \n`;
    }
}

class Inicilizacao {
    criarPulaPula(): PulaPula {
      write("Abrindo o pula-pula para as criancas brincar");
      return new PulaPula();
    }
    
    menu () {
  
      let pulaPula = this.criarPulaPula();

      while(true) {
        let linha = input();
        let palavras =  linha.split(" "); 

        if(palavras[0] == "sair") {
          break;
        } else if (palavras[0] == "entrar"){
          pulaPula.inserirCriancaNaFila(palavras[1], palavras[2]);
        } else if (palavras[0] == "sair"){
          pulaPula.sairDoPulaPula(palavras[1]);
        } else if (palavras[0] == "inserirCriancaNaFila"){
          pulaPula.inserirCriancaNaFila(palavras[1], palavras[2]);
        } else {
          console.log("comando inválido, digite novamente! ")
        }
  
    }
  }}

    let pulaPula = new PulaPula;
    pulaPula.menu();

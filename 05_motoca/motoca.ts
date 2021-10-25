
// function getRandomInt(min: number, max: number): number {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

// class Pessoa {
//     nome: string;
//     idade: number;
//     constructor(nome: string, idade: number) {
//         this.nome = nome;
//         this.idade = idade;
//     }
//     toString(): string {
//         return `${this.nome} tem ${this.idade} anos`;
//     }
// }

// class Motoca {
//     pessoa: Pessoa | null;
//     potencia: number;
//     tempo: number;

//     constructor(potencia: number) {
//         this.potencia = potencia; 
//         this.pessoa = null;
//         this.tempo = 0;
//     }

//     comprarTempo(qtd: number): void {
//         this.tempo += qtd;
//     }

//     dirigir(tempo: number): boolean {
//         if (this.pessoa == null) {
//             console.log("Moto vazia");
//             return false;
//         }
//         if (this.pessoa.idade > 10) {
//             console.log("criança muito grande pra motoca");
//             return false;
//         }
//         if (this.tempo < tempo) {
//             console.log("tempo insuficiente");
//             return false;
//         }
//         this.tempo -= tempo;
//         return true;
//     }

//     buzinar(): string {
//         let saida = "P";
//         for (let i = 0; i < this.potencia; i++)
//             saida += "e";
//         return saida + "m";
//     }

//     montar(pessoa: Pessoa): boolean {
//         if (this.pessoa === null) {
//             this.pessoa = pessoa;
//             return true;
//         }
//         console.log("Moto lotada");
//         return false;
//     }

//     desmontar(): Pessoa | null {
//         if (this.pessoa == null) {
//             console.log("Moto vazia");
//             return null;
//         }
//         const pessoa = this.pessoa;
//         this.pessoa = null;
//         return pessoa;
//     }

//     toString(): string {
//         let nome = "vazio"
//         if (this.pessoa != null)
//             nome = this.pessoa.nome;
//         return `[${nome}]`;
//     }
// }


// let motoca = new Motoca(5);
// let pessoa = new Pessoa("Calango", 10);
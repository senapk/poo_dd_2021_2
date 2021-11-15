



class Pessoa {
    nome:string;
    idade:number;

    constructor (nome:string, idade:number) {
        this.nome = nome
        this.idade = idade
    }
    /// convertendo os atributos da classe para imprimir no console logo usando so
    toString(): string {
        return this.nome + "tem" + this.idade + "anos";
    }
}


let ana = new Pessoa ("ana", 25);
console.log(ana, "tem");




class pessoa {
    nome:string;
    idade:number;

    constructor (nome:string, idade:number) {
        this.nome = nome
        this.idade = idade
    }

    toString(): string {
        return this.nome + "tem" + this.idade
    }
}
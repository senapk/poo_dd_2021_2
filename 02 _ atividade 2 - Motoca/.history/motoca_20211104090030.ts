



class Pessoa {
    nome:string;
    idade:number;

    constructor (nome:string, idade:number) {
        this.nome = nome
        this.idade = idade
    }
    /// convertendo os atributos da classe para imprimir no console logo usando só a variavel ana ao criar novo objeto
    toString(): string {
        return this.nome + "tem" + this.idade + "anos";
    }
}


let criança1 = new Pessoa ("maria julia", 4);
console.log(criança1);

class Motinha {

    /// 2 observações, aqui 
    pessoa: Pessoa | null;
    constructor() {

    }
}
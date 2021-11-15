



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


let crianca1 = new Pessoa ("maria julia", 4);
console.log(crianca1);

class Motinha {

    /// 2 observações: a classe moto ela recebe pessoa, ou seja pessoa não ta sendo criada em moto, portanto não é necessário
    /// adicionar também ao constructor, o objeto pessoa. A tipagem fica pessoa | null, porque tanto a moto pode ter uma pessoa
    /// como a moto pode estar vazia, no constructor pessoa como como null, que é a motoca iniciando vazia. 
    pessoa: Pessoa | null;
    constructor() {
        this.pessoa = null 
    }
   

    /// como no constructor inicializamos pessoa como null, ao 
    toString(): string{
        if (this.pessoa != null)
            return this.pessoa.nome /// acessando nome em pessoa 
        return "motinha vazia"
    }
}

let motinha1 = new Motinha ();
console.log(motinha1);
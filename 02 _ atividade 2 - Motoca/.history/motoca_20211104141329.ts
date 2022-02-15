



class Pessoa {
    nome:string;
    idade:number;

    constructor (nome:string, idade:number) {
        this.nome = nome
        this.idade = idade
    }
    /// convertendo os atributos da classe para imprimir no console.log
    toString(): string {
        return this.nome + "tem" + this.idade + "anos";
    }
}

class Motinha {

    /// 2 observações: a classe moto ela recebe pessoa, ou seja pessoa não ta sendo criada em moto, portanto não é necessário
    /// adicionar também ao constructor, o objeto pessoa. A tipagem fica pessoa | null, porque tanto a moto pode ter uma pessoa
    /// como a moto pode estar vazia, no constructor pessoa inicia como null, que é a motinha iniciando vazia. 
    pessoa: Pessoa | null;
    constructor() {
        this.pessoa = null 
    }
   

    /// aqui cria na classe o subir, que  é do tipo boolean, onde se pessoa está vazio então pode receber uma pessoa 
    // e caso contrário diz que a moto esta ocupada. 

    subir( pessoa: Pessoa): boolean {
        if( this.pessoa === null){
            this.pessoa = pessoa;
            return true;
        }
        console.log("motinha ocupada");
        return false
        
    }

    descer(): Pessoa |null{
        if (this.pessoa == null){
            return null;
        }

        const pessoa = this.pessoa;
        this.pessoa = null;
        return pessoa
    }
       /// como no constructor inicializamos pessoa como null, ao retornar no tostring (pessoa.nome) o terminal aponta um
    /// possivel erro de acessar o nome de uma pesssoa que pode ser que estaja vazio, então colocamos uma condição que
    // se pessoa não for nulo, retornará nome em pessoa e caso contrário retornará " motinha vazia "

    toString(): string {
    
        if (this.pessoa != null)
        
}

let motinha1 = new Motinha ();
console.log(motinha1);


return (console.log("motinha vazia"));
return this.pessoa.nome /// acessando nome em pessoa
    }
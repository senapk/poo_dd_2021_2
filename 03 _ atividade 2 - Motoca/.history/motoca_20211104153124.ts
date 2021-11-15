

///  criando a classe pessoa que tem como atributos nome e idade

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

    potencia: number
    pessoa: Pessoa | null;
    constructor(potencia:number) {
        this.pessoa = null;
        this.potencia = potencia;
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

    /// como em potencia, descer pode ser pessoa e null (vazio) 
    // 
    descer(): Pessoa |null{
        if (this.pessoa == null){
            console.log("moto vazia")
            return null;
        }

        const pessoa = this.pessoa;
        this.pessoa = null;
        return pessoa
    }

    /// criando o metodo buzinar
    
    buzinar()

       /// como no constructor inicializamos pessoa como null, ao retornar no tostring (pessoa.nome) o terminal aponta um
    /// possivel erro de acessar o nome de uma pesssoa que pode ser que estaja vazio, então colocamos uma condição que
    // se pessoa não for nulo, retornará nome em pessoa e caso contrário retornará " motinha vazia "

    toString(): string {
        let nome = "vazio"
        if (this.pessoa != null)
            nome = this.pessoa.nome;
            return `[${nome}]`;
    }
}

let motinha1 = new Motinha()

motinha1.subir(new Pessoa("maria lara",10 ))
console.log(motinha1);
motinha1.subir(new Pessoa("joao",8));




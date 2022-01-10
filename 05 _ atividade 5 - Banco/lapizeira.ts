
class Pessoa {
    nome:string; 
    constructor(nome:string){
        this.nome = nome;
    }

    public toString() {
        return this.nome;
    }
}


//// array é matriz é uma forma de armazenar valores de diferentes
/// tipos de dados em uma sequencia, 
// por exemplo: let frutas : array<string> 
// frutas = [ 'maçã, 'banana', 'laranha' ]
/// nesse caso a matriz é caixa e espera, que recebem elementos do tipo Pessoa ( que foi criado como classe contendo nome comoa atributo, e null, já que no caso
/// queremos também ter a possibilidade de além de ter uma pessoa, ter um espaço vazio, no caso quando alguém sai da fila do banco ou foi atendido )

class Banco {
    caixa: Array<Pessoa | null>;
    espera: Array<Pessoa | null>;

        ///aqui se quisessemos estabelecer um numero fixo de 3 caixas ficaria this.caixa = [null,null,null]
        /// mas pra ficar aberto, o prof colocou esse valor em aberto no constructor 
        /// uma outra forma de criar esse array  seria this.caixa = new Array< Pessoa | null > (qtdCaixas);
        /// quando colocamos this.caixa [] o length é igual a 0, ou seja teria um caixa
        ///  mas se for pra adicionar mais caixas eu posso usar this.caixa.push(null) e ai aumenta mais um item 
        /// mas como não sabemos a quantidade de caixas, pode-se adicionar no constructor um for para definir essa quantidade de caixas

    constructor (qtdcaixas:number) {
        this.caixa = []  
        for ( let i = 0; i < qtdcaixas; i++){
            this.caixa.push(null);
        }
        this.espera = []
    }

    public toString() {/// public é modificador de acesso 
        let barra = "|";
        for ( let i = 0; i < this.caixa.length; i++ ){
            let pessoa = this.caixa[i];
            barra += i + ":";
            if (pessoa == null ){
                barra += "caixa vazio";    
            }else {
                barra += pessoa.toString();

            }
            barra += "|"; 
        }
        barra += "\nespera:";
        for (let pessoa of this.espera){
            barra += pessoa.toString() + "";

        }
        return barra
    }   
}   


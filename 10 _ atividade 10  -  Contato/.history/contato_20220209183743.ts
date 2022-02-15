const readline = require ("readline-sync");
let input = () => readline.question(); /// função pra ler o que é escrito que funciona através dos pacotes que foram instalados
let write = (x: any ) => process.stdout.write(" " + x); /// aqui é pra não quebrar a linha 


class Contato {
    nome: string;
    fones: Array<Telefone> = new Array<Telefone>();

    constructor(nome: string = 'default') {
        this.nome = nome;
        this.fones = []
    }

    thissetfones

    adicionarTelefone(telefone: Telefone) {
        if(this.validaTelefone(telefone.getNumero()))
            this.fones.push(telefone);
        else
          console.log('numero de telefone invalido');
    }

    removerTelefone(indice: number) {
        let telefone = this.fones.at(indice);

        if(telefone !== undefined)
            this.fones.splice(indice, 1);
    }

    validaTelefone(numero: string): boolean {
        let validarTelefone = new RegExp('^[0-9]{2}-([0-9]{8}|[0-9]{9})'); //
        88-8888-9999
        
        return validarTelefone.test(numero);
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }

    getFones() {
        return this.fones;
    }

    setFones(telefone: Telefone) {
        this.fones.push(telefone);
    }

    toString(): string{
      return `nome: ${this.nome} - [${this.fones.values}]`;
    }

}

class Telefone {
    label: string;
    numero: string;

    constructor(label: string, numero: string){
        this.label = label;
        this.numero = numero;
    }

    getLabel() {
        return this.label;
    }

    setLabel(label: string) {
        this.label = label;
    }

    getNumero() {
        return this.numero;
    }

    setNumero(numero: string) {
        this.numero = numero;
    }

    toString() {
        return `${this.label}:${this.numero}`
    }
}

let fone1 newContato("paula"), new Telefone("oi","88-55443368")  = 
let fone2 



console.log(fone1);
const readline = require ("readline-sync");
let input = () => readline.question(); /// função pra ler o que é escrito que funciona através dos pacotes que foram instalados
let write = (x: any ) => process.stdout.write(" " + x); /// aqui é pra não quebrar a linha 


class Contato {
    nome: string;
    fones: Array<Telefone> = new Array<Telefone>();

    constructor(nome: string = 'default') {
        this.nome = nome;
        this.fones = new Array<Telefone>();
    }

    adicionarTelefone(telefone: Telefone) {
        if(this.validaTelefone(telefone.getNumero()))
            this.fones.push(telefone);
        else
          console.log('numero de telefone invalido');
    }

    adicionarTelefoneEmLotes(telefones: Array<Telefone>) {
        telefones.forEach(t => {
            if(this.validaTelefone(t.getNumero()))
                this.fones.push(t);
        });

    }

    removerTelefone(indice: number) {
        let telefone = this.fones.at(indice);

        if(telefone !== undefined)
            this.fones.splice(indice, 1);
    }

    validaTelefone(numero: string): boolean {
        let validarTelefone = new RegExp('^[0-9]{2}-([0-9]{8}|[0-9]{9})'); //88-8888-9999
        
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

class inicilizacao {
    criarContato(): Contato {
      write("informe o nome do contato");
      let contato = input ();

      return new Contato (contato);
    }
  
    help () {
      write ("comandos: \n");
      write ("iniciar: <calibre> <tamanho do tambor>")
      write ("inserirGrafiteNoTambor: <calibre> <dureza> <tamanho> ")
      write ("inserirGrafiteNoBico")
      write ("escrever: <total de folhas que deseja escrever>")
  
    }
    
    menu () {
      let contato = this.criarContato();

      while(true) {
        let linha = input();
        let palavras =  linha.split(" ");

        if(palavras[0] == "sair") {
          break;
        } else if (palavras[0] == "criar"){
          contato.setNome(palavras[1]);
          write('Este eh o contato de:' + contato.getNome());
        } else if (palavras[0] == "adicionarTelefone"){
          let fone = new Telefone(palavras[1], palavras[2]);
          contato.adicionarTelefone(fone);
          write(contato.getFones());
        } else if (palavras[0] == "adicionarTelefoneEmLotes"){
          // nao consegui fazer
        } else if (palavras[0] == "removerTelefone"){
          contato.removerTelefone(palavras[1]);
        } else if (palavras[0] == "show"){
          console.log(contato);
        } else {
          console.log("comando inválido, digite novamente! ")
        }
  
    }
  }

    let iniciar = new inicilizacao();
    iniciar.menu();

let contacts = [new Contact("eva",
    [new Fone("Oi", "8585"), new Fone("Claro", "9999")]), 
new Contact("ana",
    [new Fone("Tim", "3434")]),
new Contact("bia",
    [new Fone("Claro", "5454")])
]
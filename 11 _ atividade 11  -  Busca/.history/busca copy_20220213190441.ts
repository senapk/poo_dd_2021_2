
class Agenda {

    private contatos: Array<Contato>;

    constructor() {
        this.contatos = new Array<Contato>();
    }

    getContato(nome: string) {
        this.contatos.forEach( contato => {
            if(contato.getNome() === nome){
                return contato;
            }
        });

        for(let i = 0; i < this.contatos.length; i++) {
            if()
        }
    }

    setContatos(contatos: Array<Contato>) {
        this.contatos = contatos;
    }

    addContact(contato: Contato): void {
        let name = contato.getNome();
        let fones: Array<Telefone> = contato.getFones();
        let existente: Contato = this.contatoExiste(name);
        if(existente != null) {
            fones.forEach(f => existente.adicionarTelefone(f));
        }
        let novo: Contato = new Contato(name, fones);
        this.contatos.push(novo);
    }

    rmContact(nome: string) {
        for(let i = 0; i < this.contatos.length; i++){
            if(this.contatos[i].getNome() === nome){
                this.contatos.splice(1, i);
            }
        }
    }

    contatoExiste(nome: string) {
        let contatoExistente: Contato = null;
        for(let i = 0; i < this.contatos.length; i++){
            if(this.contatos[i].getNome() === nome)
                contatoExistente = this.contatos[i];
        }
        return contatoExistente != null ? contatoExistente : null;
    }

    search(pattern: string) {
        return this.contatos;
    }

    toString() {
        return "Agenda{" +
                "contatos=" + this.contatos +
                '}';
    }
}

class Contato {
    nome: string;
    fones: Array<Telefone> = new Array<Telefone>();

    constructor(nome: string = 'default', fones: Array<Telefone>) {
        this.nome = nome;
        this.fones = fones;
    }

    adicionarTelefone(telefone: Telefone) {
        if(this.validaTelefone(telefone.getNumero()))
            this.fones.push(telefone);
        else
          console.log('numero de telefone invalido');
    }

    removerTelefone(indice: number): void {
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


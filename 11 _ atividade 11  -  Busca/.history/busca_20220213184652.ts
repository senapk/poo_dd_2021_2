
class Agenda {

    private contatos: Array<Contato>();

    constructor() {
        this.contatos = new Array<Contato>();
    }

    public getContato(nome: string) {
        this.contatos.forEach( contato => {
            if(contato.getNome() === nome){
                return contato;
            }
        });
    }

    setContatos(contatos: Array<Contato>) {
        this.contatos = contatos;
    }

    public addContact(contato: Contato): void {
        let name = contato.getNme();
        let fones: Array<Telefone> = contato.getFones();
        let existente: Contato = this.contatoExiste(name);
        if(existente != null) {
            fones.forEach(f => existente.adicionarTelefone(f));
        }
        let novo: Contato = new Contato(name, fones);
        this.contatos.;
    }

    public void rmContact(String nome) {
        for(Contato contato: this.contatos){
            if(contato.getName().equals(nome)){
                this.contatos.remove(contato);
            }
        }
    }

    private Contato contatoExiste(String nome) {
        Contato contatoExistente = null;
        for (Contato contato : this.contatos) {
            if(contato.getName().equals(nome))
                contatoExistente = contato;
        }
        return contatoExistente != null ? contatoExistente : null;
    }

    public List<Contato> search(String pattern) {
        return this.contatos;
    }

    @Override
    public String toString() {
        return "Agenda{" +
                "contatos=" + contatos +
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


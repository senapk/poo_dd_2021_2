class Medico implements IMedico {
    nome: string;
    especialidade: Especialidade;
    pacientes: Map<string, Paciente>;

    constructor(nome: string, especialidade: string){
        this.nome = nome;
        this.especialidade = Especialidade[especialidade];
        this.pacientes = new Map<string, Paciente>();
        
        this.pacientes.get(nome)
    }

    adicionarPaciente(paciente: Paciente): void {
        if(this.pacientes.has(paciente.getId())) {
            console.log("voce ja atende esse paciente");
            return;
        }
        this.pacientes.set(paciente.getId(), paciente);
        console.log("paciente adicionado com sucesso");

    }
    removerPaciente(nome: string): void {
        if(this.pacientes.has(nome)){
            this.pacientes.delete(nome);
            console.log('paciente removido com sucesso');
            return;
        }
        console.log('nao foi possivel remover esse paciente');
    }
    getEspecialidade(): Especialidade {
        return this.especialidade;
    }

    getPacientes(): Paciente[] {
        return Array.from(this.pacientes.values());
    }

    getId() {
        return this.nome;
    }

    toString() {
        return `Med: ${this.nome}:${this.especialidade}/tPacs: [${this.pacientes.values()}]`;
    }

}
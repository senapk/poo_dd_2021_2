class Hospital {
    medicos: Map<string, IMedico>;
    pacientes: Map<string, IPaciente>;

    constructor() {
        this.medicos = new Map<string, Medico>();
        this.pacientes = new Map<string, Paciente>();
    }

    adicionarMedico(medico: Medico): void {
        if(this.medicos.has(medico.getId())){
            console.log('medico ja existe');
            return;
        }

        this.medicos.set(medico.getId(), medico);
        console.log('medico adicionado');
    }

    adicionarPaciente(paciente: Paciente): void {
        if(this.pacientes.has(paciente.getId())) {
            console.log("paciente ja existe");
            return;
        }
        this.pacientes.set(paciente.getId(), paciente);
        console.log("paciente adicionado com sucesso");

    }

    vincular(nomeMedico: string, nomePaciente: string){
        
    }

    showwAll() {
        this.toString();
    }

    toString() {
        return `Meds: [${this.medicos.values()}]  Pacs: [${this.pacientes.values()}]`;
    }
}

let medico1 = new Medico("Medico1", Especialidade.Cirurgiao);
let medico1 = new Medico("Medico2", Especialidade.Oftamologista);
let medico1 = new Medico("Medico2", Especialidade.Oftamologista);
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
let medico2 = new Medico("Medico2", Especialidade.Oftamologista);
let medico3 = new Medico("Medico3", Especialidade.Psiquiatra);

let paciente1 = new Paciente("covid", "olavo de carvalho");
let paciente2 = new Paciente("covid19", "olavo de carvalho2");
let paciente3 = new Paciente("covid0", "olavo de carvalho3");


let h = new Hospital();
h.medicos.set(medico1.getId(), medico1);
h.medicos.set(medico2.getId(), medico2);
h.medicos.set(medico3.getId(), medico3);

h.pacientes.set(paciente1.getId(), paciente1);
h.pacientes.set(paciente2.getId(), paciente2);
h.pacientes.set(paciente3.getId(), paciente3);


let p = h.pacientes.get("olavo de carvalho");

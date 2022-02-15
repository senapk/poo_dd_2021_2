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
        // nao precisa pois o adicionarMedico e adicionarPaciente ja vincula um ao outro
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

let paciente1 = new Paciente("doença1", "olavo de carvalho");
let paciente2 = new Paciente("cdoença2", "olavo de carvalho2");
let paciente3 = new Paciente("doneça3", "olavo de carvalho3");


let h = new Hospital();
h.medicos.set(medico1.getId(), medico1);
h.medicos.set(medico2.getId(), medico2);
h.medicos.set(medico3.getId(), medico3);

h.pacientes.set(paciente1.getId(), paciente1);
h.pacientes.set(paciente2.getId(), paciente2);
h.pacientes.set(paciente3.getId(), paciente3);


// let p = h.pacientes.get("olavo de carvalho");
h.pacientes.get("olavo de carvalho").adicionarMedico(medico1);
h.pacientes.get("olavo de carvalho").adicionarMedico(medico1); // emite erro pois o medico1 ja existe

h.medicos.get("Medico1").adicionarPaciente(paciente1);
h.medicos.get("Medico1").adicionarPaciente(paciente2);

console.log(h);


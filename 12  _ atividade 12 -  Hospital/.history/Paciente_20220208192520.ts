class Paciente implements IPaciente {
    diagnostico: string;
    medicos: Map<string, Medico>;
    nome: string;

    constructor(diagnostico:string, nome: string){
        this.diagnostico = diagnostico;
        this.medicos = new Map<string, Medico>();
        this.nome = nome;
    }

    adicionarMedico(medico: Medico): void {
        if(this.medicos.has(medico.getId())){
            console.log('voce ja eh paciente deste medico');
            return;
        }

        for (const value of this.medicos.values()) {
            if(medico.getEspecialidade.valueOf() === value.getEspecialidade().valueOf()){
                console.log('nao eh possivel ser paciente de mais de um medico com a mesma especialidade');
                return;
            }
        }

        this.medicos.set(medico.getId(), medico);
        console.log('medico adicionado');
    }

    removerMedico(nome: string): void {
        if(this.medicos.has(nome)){
            this.medicos.delete(nome);
            console.log('medico removido');
            return;
        }
        console.log('medico nao existe');
    }
    getDiagnostico(): string {
        return this.diagnostico;
    }
    getId(): string {
        return this.nome;
    }
    getMedicos(): Medico[] {
        return Array.from(this.medicos.values());
    }

    toString() {
        return `pac: ${this.nome}:${this.diagnostico}   /tMeds: [${this.medicos.values()}]`;
    }

}
interface IPaciente {
    adicionarMedico(medico: Medico): void {
        jfijreie
    };
    removerMedico(nome: string): void;
    getDiagnostico(): string;
    getId(): string;
    getMedicos(): Array<Medico>;
}
interface IPaciente {
    adicionarMedico(medico: Medico): void {
        
    };
    removerMedico(nome: string): void;
    getDiagnostico(): string;
    getId(): string;
    getMedicos(): Array<Medico>;
}
interface IMedico {
    adicionarPaciente(paciente: Paciente): void;
    removerPaciente(nome: string): void;
    getEspecialidade(): Especialidade;
    getPacientes(): Array<Paciente>;
}
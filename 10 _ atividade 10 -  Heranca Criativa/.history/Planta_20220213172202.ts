abstract class Planta {

    nomePopular: string;
    nomeCientifico: string;
    cor: Cor;
    altura: number;
    precisaAguar: boolean;
    tempoDeAguar: number;


    constructor(nomePopular: string, 
                nomeCientifico: string,
                cor: Cor,
                altura: number,
                precisaAguar: boolean,
                temporDeAguar: number) {
        
        this.nomePopular = nomePopular;
        this.nomePopular = nomeCientifico;
        this.cor = cor;
        this.altura = altura;
        this.precisaAguar = precisaAguar
    }

    podar() {

    }

    aguar() {

    }
}
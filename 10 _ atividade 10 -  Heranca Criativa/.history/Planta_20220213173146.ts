abstract class Planta {

    nomePopular: string;
    nomeCientifico: string;
    cor: Cor;
    altura: number;
    alturaMaxima: number;
    podePodar: boolean;
    precisaAguar: boolean;
    tempoDeAguar: number;


    constructor(nomePopular: string, 
                nomeCientifico: string,
                cor: Cor,
                altura: number,
                alturaMaxima: number,
                temporDeAguar: number) {
        
        this.nomePopular = nomePopular;
        this.nomePopular = nomeCientifico;
        this.cor = cor;
        this.altura = altura;
        this.alturaMaxima = alturaMaxima;
        this.precisaAguar = false;
        this.tempoDeAguar = temporDeAguar;
    }

    podar(): boolean {
        return ;
    }

    aguar() {

    }
}
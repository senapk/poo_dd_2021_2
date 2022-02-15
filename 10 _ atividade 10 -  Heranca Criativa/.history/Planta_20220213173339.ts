abstract class Planta {

    nomePopular: string;
    nomeCientifico: string;
    cor: Cor;
    altura: number;
    alturaMaxima: number;
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

    podePodar(): boolean {
        return this.altura >= this.alturaMaxima;
    }

    podar(): void {
        if(this.podePodar);
    }

    aguar() {

    }
}
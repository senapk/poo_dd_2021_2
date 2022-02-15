abstract class Planta {

    nomePopular: string;
    nomeCientifico: string;
    cor: Cor;
    alturaAtual: number;
    alturaMedia: number;
    alturaMaxima: number;
    diaAguado: number;
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
        this.alturaAtual = altura;
        this.alturaMedia = altura;
        this.alturaMaxima = alturaMaxima;
        this.diaAguado = Date.now();
        this.tempoDeAguar = temporDeAguar;
    }

    podePodar(): boolean {
        return this.alturaAtual >= this.alturaMaxima;
    }

    podar(): void {
        if(this.podePodar()){
            this.alturaAtual = this.alturaMedia;
        }
    }

    podeAguar() {
        let aux = this.
        return this.diaAguado
    }
}
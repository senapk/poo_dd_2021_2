class CoqueiroDeVenus extends Planta {
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
            super(nomePopular, nomeCientifico, cor);
            this.alturaAtual = altura;
            this.alturaMedia = altura;
            this.alturaMaxima = alturaMaxima;
            this.diaAguado = Date.now();
            this.tempoDeAguar = temporDeAguar;
    }
}
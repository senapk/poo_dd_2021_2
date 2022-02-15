class DoisAmores extends Planta {
    alturaAtual: number;
    alturaMedia: number;
    alturaMaxima: number;
    diaAguado: number;
    tempoDeAguar: number;

    constructor(altura: number,
        alturaMaxima: number,
        temporDeAguar: number) {
        super();
        this.alturaAtual = altura;
        this.alturaMedia = altura;
        this.alturaMaxima = alturaMaxima;
        this.diaAguado = Date.now();
        this.tempoDeAguar = temporDeAguar;
    }
}
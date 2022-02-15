class DoisAmores extends Planta {
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

    podePodar(): boolean {
        return this.alturaAtual >= this.alturaMaxima;
    }

    podar(): void {
        if(this.podePodar()){
            this.alturaAtual = this.alturaMedia;
        }
    }

    podeAguar(): boolean {
        let aux = Date.now() - this.diaAguado;
        return aux >= this.tempoDeAguar
    }

    aguar(): void {
        if(this.podeAguar()) {
            console.log('regando a platinha...');
            return;
        }
        console.log('nao pode aguar');
    }
}
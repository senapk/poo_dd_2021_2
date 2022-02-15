abstract class Planta {

    nomePopular: string;
    nomeCientifico: string;
    cor: Cor;


    constructor(nomePopular: string, 
                nomeCientifico: string,
                cor: Cor) {
        
        this.nomePopular = nomePopular;
        this.nomePopular = nomeCientifico;
        this.cor = cor;
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
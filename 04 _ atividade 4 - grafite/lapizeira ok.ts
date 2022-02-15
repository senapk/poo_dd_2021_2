import { Console } from "console";


class Lapiseira {
    calibre: number; // 0.7, 0.9
    grafites: Array<Grafite>;
    bico: number;
    temGrafiteNoBico: boolean;

    constructor(calibre: number, capacidadeDoTambor: number) {
        this.calibre = calibre;
        this.grafites = new Array<Grafite>(capacidadeDoTambor);
        this.bico = 0;
        this.temGrafiteNoBico = false;
    }

    inserirGrafiteNoTambor(calibre: number, dureza: string, tamanho: number): void  {
        if(calibre != this.calibre) {
            console.log('calibre incompativel!');
        }

        else {
            let grafite = new Grafite(calibre, dureza, tamanho);

            this.grafites.push(grafite);
        }

    }

    inserirNoBico(): void {
        if(this.temGrafiteNoBico == true) { // this.temGrafiteNoBico
            this.removerGrafiteDoBico();
            this.removerGrafiteDoTambor();
            this.inserir();
            
            return;
        }
        
        this.inserir();
    }

    inserir(): void {
        this.bico++;
        this.temGrafiteNoBico = true;
    }

    removerGrafiteDoBico(): any {
        if(this.bico <= 0)
            return;

        this.bico--;
        this.temGrafiteNoBico = false;
    }

    removerGrafiteDoTambor(): any {
        if(this.grafites.length > 0){
            this.grafites.pop();
            return;
        }

        console.log('os grafites do tambor acabaram');
    }

    escrever(totalDeFolhas: number): any {
        if (!this.temGrafiteNoBico){ // mesma coisa que isso: [this.temGrafiteNoBico == false]
            console.log('não tem grafite!');
            return;
        }

        let grafiteGasto = 

        

    }

}

class Grafite {
    calibre: number;
    dureza: string; // hb, 
    tamanho: number;

    constructor(calibre:number, dureza:string, tamanho:number){
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;    
    }

    gastoPorFolha(): number {
        if (this.dureza === 'HB')
            return 1;
        else if (this.dureza === '2B')
            return 2;
        else if (this.dureza === '4B')
            return 4;
        else if (this.dureza === '6B')
            return 6;
        else
            return 0;
    }

}



/// começa criando a classe grafite, pois a lapiseira contém grafite
/// tem como atributos calibre, dureza e tamanho.

class Grafite {
    calibre: number;
    dureza: string;
    tamanho: number;
    grafite: number;

    constructor(calibre:number, dureza:string, tamanho:number){
        this.calibre = calibre;
        this.dureza = dureza;
        this.tamanho = tamanho;    
    }
    
    /// aqui definimos um gasto pro grafite, então se a dureza for valor definido como HB gastara 1
    
    gastoGrafite(): number{
        if(this.dureza === 'HB')
         return 1;
        if(this.dureza === "2B")
         return 2;
        if(this.dureza === '4B')
            return 4;
        if(this.dureza === '6B')
            return 6;
        return 0;

    }

    escrever(folhas:number): boolean{
        if(this.grafite == null){
            console.log("lapiseira sem grafite");
            return false;
        }

        let gasto = this.grafite.gastoporfolha() * folhas; /// definimso o gasto com gasto por folhas x a quantidade de folhas 

        if (gasto <= this.grafite.tamanho){
            console.log("texto foi escrito")
            this.grafite.tamanho -= gasto; // se o que devo gastar for menor que tamanho, só diminui gasto 
        } else { /// se não tem tamanho suficiente, tem que descobrir o quanto conseguiu gastar 
            let escrito = this.grafite.tamanho / this.grafite.gastoGrafite
            console.log("texto escrito pela metade: " + realizado + "folhas ");
            this.grafite.tamanho = 0 ; /// zera o grafite pois gastou todo 

        }

        if( this.grafite.tamanho = 0 ) {
            this.grafite = null; 
        }
    }


    // O toString() é usado quando um objeto necessita ser exibido como texto ou quando precisa ser lido como uma string.
    // posso escrever de duas formas, uma que é como substituição e outra como concantenação

    toString(): string {
        
        return `Grafite ${this.calibre}: ${this.dureza}:${this.tamanho}`; // subsituição 
        // ou return "Grafite: " + this.calibre + ":" + this.dureza + ":" + this.tamanho; // concatenação
    }

}

// em lapiseira temos calibre e grafite, que é do tipo Grafite mas também null, pq a lapiseira pode estar vazia

class Lapiseira {
    calibre:number;
    private grafite: Grafite | null ; /// aqui não é um objeto grafite, é uma atributo que guarda um objeto criado fora de Lapiseira
    
    constructor (calibre:number){
        this.calibre = calibre;
        this.grafite = null; // lapiseira começando sem grafite 

    }

    // aqui duas condições como metodo para o grafite: quando estiver cheio e quando o calibre for muito grosso 

    setGrafite(grafite: Grafite ):boolean{
        if (this.grafite != null ) {
            console.log( "lapiseira cheia");
            return false;
        }
        if (grafite.calibre != this.calibre){
            console.log("grafite incompátivel");
            return false;

        }

        this.grafite = grafite;
        return true;

    }
    
    /// em remover grafite temos grafite e null, pq se já não tiver nenhum grafite 
    /// dirá que não há, mas caso tenha e de fato seja removido, precisa criar essa variavel temporária para
    // guardar o grafite que foi retirado (let grafite = this.grafite )
    
    removerGrafite(): Grafite | null { 
        if(this.grafite == null){
            console.log("não há grafite");
            return null;
        }
        let grafite =  this.grafite;
        this.grafite = null;
        return grafite; 

    }
}

/// CASO 1 - CRIANDO LAPIZEIRA E ADICIONANDO GRAFITE
/// aqui nesse primeiro caso estamos criando a lapiseira, e adicionando nela um grafite, de calibre 0.8, dureza AB e tamanho 10 
// aqui usamos o setGrafite ( método de lapizeira por indicação do professor para não fazermos: lapizeira1.grafite = grafite pois
// adicionamos la em Lapizeira o private que é um controle de acesso)

///let Lapizeira1 = new Lapiseira (0.8);
///console.log(Lapizeira1)
///let grafite = new Grafite( 0.8, "AB", 10)
///Lapizeira1.setGrafite(grafite);
///console.log(Lapizeira1)

/// CASO 2 - CRIANDO LAPIZEIRA E REMOVENDO GRAFITE

let Lapizeira2 = new Lapiseira (0.5);
Lapizeira2.setGrafite(new Grafite( 0.5, "3B", 8 ));
let grafite = Lapizeira2.removerGrafite();
console.log(Lapizeira2)


// se repetir Lapizeira2.removerGrafite(); vai exibir : não há grafite 

Lapizeira2.escrever(50);
console.log(Lapizeira2)

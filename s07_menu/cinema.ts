class Cliente {
    id : String;
    fone : Number;
    constructor(id : String, fone : Number){
        this.id = id;
        this.fone = fone;
    }
}

class Cinema {
    fileira : Array <Cliente | null>
    constructor(qtdCadeiras:Number){
        this.fileira = []
        for (let i= 0;i < qtdCadeiras;i++){
            this.fileira.push(null)
        }
    }

    validarPosicao(posicao: number): boolean {
        if (posicao < 0 || posicao > this.fileira.length) {
            console.log("Essa cadeira não existe!")
            return false;
        }
        return true;
    }

    //retorna -1 se não encontrar
    indexOf(id: String): number {
        return this.fileira.findIndex(c => c != null && c.id == id);
        // for (let i = 0; i < this.fileira.length; i++)
        //     if (this.fileira[i] != null && this.fileira[i].id == id)
        //         return i;
        // return -1;
    }

    reservar(cliente: Cliente, posicao: number): boolean {
        if(!this.validarPosicao(posicao))
            return false;
        
        if (this.fileira[posicao] != null) {
            console.log("Essa cadeira já está reservada!")
            return false;
        }
        if (this.indexOf(cliente.id) != -1) {
            console.log("Você já está reservando uma cadeira!")
            return false;
        }
        this.fileira[posicao] = cliente;
        return true;
    }

    cancelar(id: string): boolean {
        let posicao = this.indexOf(id);
        if (posicao == -1) {
            this.fileira[posicao] = null;
            return true;
        }
        return false;
    }
}
// public toString(){
//     let str = "assentos: | "
//     for(let i = 0;i < this.assentos.length;i++){
//         let cliente = this.assentos[i];
//         str += i + ":"
//         str+= cliente !== null ? cliente.toString() : "-----"
//         if (cliente == null){
//             str+= "vazio"

//         }else{
//             str += cliente.toString;
//         }
//         str += " |";


//     }
//     return str;
// }


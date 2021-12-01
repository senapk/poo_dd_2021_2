
class Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    public toString() {
        return "" + this.nome + ":" + this.idade;
    }
}

let pessoas = new Array<Pessoa>();
pessoas.push(new Pessoa("caio", 13));
pessoas.push(new Pessoa("abel", 14));
pessoas.push(new Pessoa("bruno", 15));

for (let p of pessoas) {
    console.log(p.toString());
}

pessoas.sort((a, b) => {
    if (a.nome < b.nome)
        return -1;
    if (a.nome > b.nome)
        return 1;
    return 0;
});

console.log(pessoas.map((p) => p.toString()).join(", "));

// let cadeiras: Map<number, string> = new Map<number, string>();
// cadeiras.set(3, "bruno");
// cadeiras.set(4, "maria");
// cadeiras.set(1, "joao");
// cadeiras.set(7, "tobias");

// console.log(cadeiras.has(3)); // true
// let lugares = [...cadeiras.keys()];

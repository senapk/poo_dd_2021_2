//criando uma função pra imprimir uma lista
let show = (lista: any[]) => console.log("[" + lista.join(", ") + "]");

//ordenando uma lista de primitivos
let lista: Array<number> = [3, -1, 2, 10, 3, -5, 4, -7, 5, 9, 0];
lista.sort(); //compara os elementos convertidos para texto
show(lista);



//criando a própria função de ordenação
function compare_to(a: number, b: number): number {
    if (a < b) { //valor a deve vir primeiro
        return -1; //qualquer valor negativo
    } else if (a > b) { //valor a deve vir depois
        return 1; //qualquer valor maior que zero
    } else { //são iguais
        return 0;
    }
}


lista.sort(compare_to)
show(lista);

//simplificando com o uso de arrow functions

lista.sort((a, b) => a - b);
show(lista);
lista.sort((a, b) => b - a);
show(lista);

lista.sort((a, b) => Math.abs(a) - Math.abs(b));
show(lista);



//usando strings
let nomes: Array<string> = ["João", "Maria", "José", "Pedro", "Ana"];
nomes.sort();
show(nomes);

//invertendo ordenação
nomes.sort((a, b) => a.localeCompare(b)); //ão antes do s
show(nomes);


//ordenando objetos
class Pessoa {
    constructor(public nome: string, public idade: number) {}
    public toString(): string {
        return this.nome + ":" + this.idade;
    }
}

let pessoas: Array<Pessoa> = [new Pessoa("João", 30), new Pessoa("João", 10), 
                              new Pessoa("José", 30), new Pessoa("Pedro", 40), 
                              new Pessoa("Zeca", 45), new Pessoa("Bruno", 50)];

pessoas.sort();
show(pessoas); //se usado sem nenhum parâmetro, vai converter para string e comparar as strings

//apenas pelo nome
pessoas.sort((a, b) => a.nome.localeCompare(b.nome));
show(pessoas);

//ordenando pela idade
pessoas.sort((a, b) => b.idade - a.idade);
show(pessoas);

//nome e idade
pessoas.sort((a, b) => a.nome.localeCompare(b.nome) || a.idade - b.idade);




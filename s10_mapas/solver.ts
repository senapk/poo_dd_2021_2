/*
pro vscode não reclamar que ele não sabe o que é um map
npm install @types/node
*/

let alunos = new Map<number, string>(); //ES¨6 
alunos.set(3456, "fco");
alunos.set(5132, "ana");
alunos.set(1194, "fabio");
alunos.set(1194, "andre");

alunos.has(1678); //nao
alunos.has(5132); //true

console.log(alunos.size); //3

let valor = 5132;
if (alunos.has(valor)) {
    console.log(alunos.get(valor));
} else {
    console.log("nao existe");
}

alunos.delete(5132);
console.log(alunos.size); //2



// //1. Iterate over map keys
// for (let key of alunos.keys()) {
//     console.log(key);//3456, 5132, 1194
// }

// let keys = [...alunos.keys()].sort( (a,b) => a - b);

// for (let key of alunos.keys()) {
//     console.log(key);
// }

// //2. Iterate over map values
// for (let value of alunos.values()) {
//     console.log(value); //fco, ana, fabio
// }

// //3. Iterate over map entries
// for (let entry of alunos.entries()) {
//     console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
// }

// //4. Using object destructuring
// for (let [key, value] of alunos) {
//     console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
// }

// console.log("ola pessoal");


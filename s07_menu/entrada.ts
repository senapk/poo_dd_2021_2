
/*
instalar:
npm install readline-sync @types/readline-sync @types/node

rodar:
tsc entrada.ts && node entrada.js
*/

const readline = require('readline-sync');
let input = (text: string = "") => readline.question(text)
let write = (x: any, end = "\n") => process.stdout.write("" + x + end)

function main() {
    let nome = input("Digite seu nome: ");
    write("olá " + nome, '');
    write(", como você está hoje?");
}

main();
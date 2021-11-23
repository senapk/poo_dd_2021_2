//não funciona o import no repl.it, por isso estou usando o modo require
const readline = require('readline-sync');
let input = () => readline.question();
let write = (x: any) => process.stdout.write("" + x);

write("Digite seu nome: ");
let nome = input();
write("Seja bem vindo " + nome + "!\n");

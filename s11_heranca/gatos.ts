
class Animal {
    private alive: boolean = true;
    private especie: string = ""

    public constructor(especie: string) {
        this.especie = especie;
    }
    public isAlive(): boolean {
        return this.alive;
    }
    public kill(): void {
        console.log("matando " + this.especie);
        this.alive = false;
    }
    public getEspecie(): string {
        return this.especie;
    }
    public toString() {
        return this.especie + ":" + (this.alive ? "alive" : "dead");        
    }
    
}

class Pet extends Animal {
    protected nome: string;
    
    public constructor(nome: string, especie: string) {
        super(especie);
        this.nome = nome;
    }

    public brincar() {
        if (this.isAlive()) {
            console.log("brincando com " + this.nome);
        } else {
            console.log("Por favor, me enterre!");
        }
    }

    //sobrescrita do metodo toString
    public toString() {
        return this.nome + ":" + super.toString();
    }
}

class Cat extends Pet {
    private vidas: number;
    constructor(nome: string, vidas: number) {
        super(nome, "gato");
        this.vidas = vidas;
    }

    public brincar() {
        if (this.isAlive()) {
            console.log("brincando com " + this.nome);
        } else {
            console.log("Espero estar empalhado");
        }
    }

    public lamber() {
        if (this.isAlive()) {
            console.log("lambering");
        } else {
            console.log("Não pode mais lamber");
        }
    }

    public kill() {
        if (!this.isAlive()) {
            console.log("Este gato está morto!");
        } else if (this.vidas > 1) {
            console.log("Perdeu uma vida");
            this.vidas--;
        } else { //tem 1 vida
            this.vidas--;
            super.kill();
        }
    }

    public toString() {
        return super.toString() + ":" + this.vidas;
    }
}

function main() {

    let saco: Animal[] = [];
    saco.push(new Animal("cachorro"));
    saco.push(new Pet("Totó", "cachorro"));
    saco.push(new Cat("Chiquinha", 4));
    saco.push(new Cat("Lilo", 2));

    while (saco.length > 1) {
        for (let animal of saco) 
            animal.kill();
        saco = saco.filter(animal => animal.isAlive());
    }
    let sobrevivente: Animal = saco[0];
    if (sobrevivente instanceof Cat) {
        let gato: Cat = <Cat>sobrevivente;
        gato.lamber();
    }
}


main();


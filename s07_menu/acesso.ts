class Carro {
    private gas: number;
    private gasMax: number;

    setGas(value: number) {
        if(value < 0)
            this.gas = 0;
        else if(value > this.gasMax)
            this.gas = this.gasMax;
        else
            this.gas = value;
    }
}

class Conta {
    private id: number;
    private saldo: number;
    
    public constructor(id: number, saldo: number) {
        this.id = id;
        this.saldo = saldo;
    }

    public getSaldo(): number {
        return this.saldo;
    }
    public getId(): number {
        return this.id;
    }
    public setId(id: number): void {
        if(id > 0) {
            this.id = id;
        }
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        this.saldo -= valor;
    }

    public toString(): string {
        return `Conta: ${this.id} Saldo: ${this.saldo}`;
    }
}

let conta = new Conta(1, 400);
conta.setId(2);
conta.sacar(10);
conta.depositar(10000);
console.log(conta.getSaldo());
console.log(conta.getId());
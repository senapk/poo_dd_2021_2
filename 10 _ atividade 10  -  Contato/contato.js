var readline = require("readline-sync");
var input = function () { return readline.question(); }; /// função pra ler o que é escrito que funciona através dos pacotes que foram instalados
var write = function (x) { return process.stdout.write(" " + x); }; /// aqui é pra não quebrar a linha 
var Contato = /** @class */ (function () {
    function Contato(nome) {
        if (nome === void 0) { nome = 'default'; }
        this.fones = new Array();
        this.nome = nome;
    }
    Contato.prototype.adicionarTelefone = function (telefone) {
        if (this.validaTelefone(telefone.getNumero()))
            this.fones.push(telefone);
    };
    Contato.prototype.adicionarTelefoneEmLotes = function (telefones) {
        var _this = this;
        telefones.forEach(function (t) {
            if (_this.validaTelefone(t.getNumero()))
                _this.fones.push(t);
        });
    };
    Contato.prototype.removerTelefone = function (indice) {
        var telefone = this.fones.at(indice);
        if (telefone !== undefined)
            this.fones.push(telefone);
    };
    Contato.prototype.validaTelefone = function (numero) {
        var validarTelefone = new RegExp('^[0-9]{2}-([0-9]{8}|[0-9]{9})');
        return validarTelefone.test(numero);
    };
    Contato.prototype.getNome = function () {
        return this.nome;
    };
    Contato.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Contato.prototype.getFones = function () {
        return this.fones;
    };
    Contato.prototype.setFones = function (telefone) {
        this.fones.push(telefone);
    };
    return Contato;
}());
var Telefone = /** @class */ (function () {
    function Telefone(label, numero) {
        this.label = label;
        this.numero = numero;
    }
    Telefone.prototype.getLabel = function () {
        return this.label;
    };
    Telefone.prototype.setLabel = function (label) {
        this.label = label;
    };
    Telefone.prototype.getNumero = function () {
        return this.numero;
    };
    Telefone.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Telefone.prototype.toString = function () {
        return "".concat(this.label, ":").concat(this.numero);
    };
    return Telefone;
}());
var inicilizacao = /** @class */ (function () {
    function inicilizacao() {
    }
    inicilizacao.prototype.criarContato = function () {
        write("informe o nome do contato");
        var contato = input();
        return new Contato(contato);
    };
    inicilizacao.prototype.help = function () {
        write("comandos: \n");
        write("iniciar: <calibre> <tamanho do tambor>");
        write("inserirGrafiteNoTambor: <calibre> <dureza> <tamanho> ");
        write("inserirGrafiteNoBico");
        write("escrever: <total de folhas que deseja escrever>");
    };
    inicilizacao.prototype.menu = function () {
        var contato = this.criarContato();
        while (true) {
            var linha = input();
            var palavras = linha.split(" ");
            if (palavras[0] == "sair") {
                break;
            }
            else if (palavras[0] == "criar") {
                contato.setNome(palavras[1]);
                write("Este eh o contato de: ".concat(contato.getNome, "."));
            }
            else if (palavras[0] == "adicionarTelefone") {
                var fone = new Telefone(palavras[1], palavras[2]);
                contato.adicionarTelefone(fone);
                write("".concat(contato.getFones()));
            }
            else if (palavras[0] == "adicionarTelefoneEmLotes") {
                // nao consegui fazer
            }
            else if (palavras[0] == "removerTelefone") {
                contato.removerTelefone(palavras[1]);
            }
            else {
                console.log("comando inválido, digite novamente! ");
            }
        }
    };
    return inicilizacao;
}());
var iniciar = new inicilizacao();
iniciar.menu();

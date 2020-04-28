//Tarefa 2 do treinamento de JavaScript do Processo Seletivo da Visão 2020
//Autor: Felipe Brito

class Curso{
    constructor(nome, quantPeriodos, cargaHoraria){
        this.nome=nome;
        this.quantPeriodos=quantPeriodos;
        this.cargaHoraria=cargaHoraria;
    }
}

class Universidade{
    constructor(nome, Curso){
        this.nome=nome;
        this.cursos=[Curso];
    }
}

class Pessoa{
    constructor(nome, idade, sexo){
        this.nome=nome;
        this.idade=idade;
        this.sexo=sexo;
    }
}

class Garcom extends Pessoa{
    constructor(nome, idade, sexo){
        super(nome, idade, sexo);
    }
}

class Republica{
    constructor(nome, idade, quantMoradores, Pessoa){
        this.nome=nome;
        this.idade=idade;
        this.quantMoradores=quantMoradores;
        this.integrantes=[Pessoa];
    }
}

class Pedido{
    constructor(nome, valor){
        this.nome=nome;
        this.valor=valor;
    }
}

class Bebida extends Pedido{
    constructor(nome, valor){
        super(nome, valor);
    }
}

let curso0 = new Curso("SJM", 8, 3000);
let curso1 = new Curso("CJM", 10, 3630);
let universidade0 = new Universidade("UFOP", [curso0,curso1]);

let pessoa0 = new Pessoa("Pedro", 20, "M");
let pessoa1 = new Pessoa("Ana", 17, "F");
let pessoa2 = new Pessoa("Paulo", 23, "M");
let pessoa3 = new Pessoa("Armando", 17, "M");
let garcom = new Garcom("Andre");
let republica0 = new Republica("República Orfanato", 10, 5, [pessoa2, pessoa3]);

let pedido0 = new Pedido("Coca-Cola", 5);
var conta = pedido0.valor;
let bebida0 = new Bebida("Cerveja", 6);
conta += bebida0.valor;

function calcularTotal(conta){
    return `A conta deu R$ ${conta} galerinha`;
}

function calcularIndividual(conta){
    return `Deu R$ ${conta/4} para cada um`;
}

garcom.checarIDs = function(pessoa){
    if(pessoa.idade>=18){
        return pessoa.nome + " pode tomar cerveja";
    }else{
        return pessoa.nome + " vai tomar Coca-Cola";
    }
}

pessoa0.pedirConta = function(conta){
    calcularIndividual(conta);
    calcularTotal(conta);
}
pessoa1.pedirConta = function(conta){
    calcularIndividual(conta);
    calcularTotal(conta);
}
pessoa2.pedirConta = function(conta){
    calcularIndividual(conta);
    calcularTotal(conta);
}
pessoa3.pedirConta = function(conta){
    calcularIndividual(conta);
    calcularTotal(conta);
}

console.log(garcom.checarIDs(pessoa0));
console.log(garcom.checarIDs(pessoa1));
console.log(pessoa0.pedirConta(conta));
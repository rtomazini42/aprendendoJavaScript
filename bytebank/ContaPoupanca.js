import { Conta } from "./Conta.js";


export class ContaPoupanca extends Conta{

    constructor(saldoInicial,cliente,agencia){
        super(saldoInicial,cliente,agencia);
    }
    

    sacar(valor){
        console.log("Processando saque");
        super.sacar(valor +(valor*0.05));
        console.log(`${valor} sacado, mais acrescimo de 2% ${valor*0.02}`);
    }



}
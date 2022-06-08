//import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0,cliente,agencia);
        ContaCorrente.numeroDeContas +=1;
        console.log("Conta Criada" + ContaCorrente.numeroDeContas);
    }


    sacar(valor){
        console.log("Processando saque");
        super.sacar(valor +(valor*0.05));
        console.log(`${valor} sacado, mais acrescimo de 5% ${valor*0.05}`);
    }
}
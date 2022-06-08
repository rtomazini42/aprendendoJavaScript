import { Cliente } from "./Cliente.js";
export class Conta{
    static numeroDeContas = 0;
    agencia;
    #cliente;
    #saldo = 0;

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente)
        {
            this.#cliente = novoCliente;
        }
        
    }

    get cliente(){
        return this.#cliente;
    }
    get saldo(){
        return this.#saldo;
    }

    
    constructor(saldoInicial,cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        this.#saldo = saldoInicial;
    }

    sacar(valor){
        console.log(`Saldo atual: ${this.#saldo}`);
        console.log(`Processando saque`);
        if(this.#saldo>=valor){
            this.#saldo -= valor;
            console.log("Sacando");
        }
        else{
            console.log("Saldo insuficiente");
        }
        console.log(`Saldo atual: ${this.#saldo}`);
        return this.#saldo;
    }

    depositar(valor){
        if(valor<=0){
            return; 
        }
        else{
            console.log("Depositado");
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    transferir(valor, conta){
        this.sacar(valor);
        conta.depositar(valor);
    }
}
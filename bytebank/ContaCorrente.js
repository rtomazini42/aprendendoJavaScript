import { Cliente } from "./Cliente.js";

export class ContaCorrente{
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
    
    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas +=1;
        console.log("Conta Criada" + ContaCorrente.numeroDeContas);
    }

    sacar(valor){
        if(this.#saldo>=valor){
            this.#saldo -= valor;
            console.log("Sacando");
        }
        else{
            console.log("Saldo insuficiente");
        }
        console.log(this.#saldo);
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
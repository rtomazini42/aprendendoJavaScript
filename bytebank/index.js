import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"



const cliente1 = new Cliente("Renan", "11511411688");
//cliente1.nome = "Renan";
//cliente1.cpf = "11511411688";
//cliente1.agência = 1001;
//cliente1.saldo = 0.0;

const cliente2 = new Cliente("Luna", "123444567710");
//cliente2.nome = "Luna";
//cliente2.cpf = "123444567710";
//cliente2.agência = 1001;
//cliente2.saldo = 0.0;

//console.log(cliente1);
//console.log(cliente2);

const ContaCorrente1 = new ContaCorrente(cliente1, 1001);
const ContaCorrente2 = new ContaCorrente(cliente2, 1002);
const ContaCorrente3 = new ContaCorrente(cliente2, 1001);
ContaCorrente1.depositar(200);
const valorSacado = ContaCorrente1.sacar(10);
console.log(valorSacado);
console.log(ContaCorrente1.saldo);
ContaCorrente1.transferir(20,ContaCorrente2);
ContaCorrente1.transferir(20,ContaCorrente2);
//console.log(ContaCorrente1);
console.log(ContaCorrente1.saldo);
ContaCorrente1.transferir(100,ContaCorrente2);
console.log(ContaCorrente1.saldo);
console.log(ContaCorrente1.cliente);
//console.log(ContaCorrente2);
console.log(ContaCorrente2.saldo);
console.log(ContaCorrente2.cliente);
console.log(ContaCorrente.numeroDeContas);
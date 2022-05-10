import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1= new Cliente("Renan", "000-999-110-00");
const cliente2= new Cliente("Luna", "000122101021");

const contaPoupanca1 = new ContaPoupanca(10000,cliente1,1);

const contaPoupanca2 = new ContaPoupanca(340,cliente2,1);

const contaCorrente1 =  new ContaCorrente(cliente1,2);

console.log(contaPoupanca1.cliente);
console.log(contaPoupanca1.saldo);
console.log(contaPoupanca2.cliente);
console.log(contaPoupanca2.saldo);
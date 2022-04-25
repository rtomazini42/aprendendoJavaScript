import {Cliente} from './Cliente.js';
import {Produto} from './Produto.js';


const cliente1 = new Cliente("Renan", "0000-000");
const produto1 = new Produto("Alface", 0.67);
const produto2 = new Produto("Alçaga",0.98);
const produto3 = new Produto("Alho poró", 1.20);
const produto4 = new Produto("Batata", 0.78);
const produto5 = new Produto("Pasta de dentes", 2,75);
const produto6 = new Produto("Pão", 0.88);
//console.log(produto1.nomeProduto)


cliente1.adicionarProdutoNoCarrinho(produto1);
cliente1.adicionarProdutoNoCarrinho(produto2);
cliente1.adicionarProdutoNoCarrinho(produto3);
cliente1.adicionarProdutoNoCarrinho(produto1);
cliente1.adicionarProdutoNoCarrinho(produto3);
cliente1.adicionarProdutoNoCarrinho(produto4);
cliente1.adicionarProdutoNoCarrinho(produto5);
cliente1.adicionarProdutoNoCarrinho(produto6);
cliente1.adicionarProdutoNoCarrinho(produto6);
cliente1.adicionarProdutoNoCarrinho(produto6);
cliente1.adicionarProdutoNoCarrinho(produto6);


cliente1.gerarNF();
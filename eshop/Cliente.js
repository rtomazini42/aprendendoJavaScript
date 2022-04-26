import { Produto } from "./Produto.js";

export class Cliente{
    nome;
    #cpf;
    carrinho = Array();

    
    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get cpf(){
        return this.#cpf;
    
    }

    constructor(nome, cpf){
        this.nome = nome;
        this.#cpf = cpf;
        const carrinho = [];
        console.log("Cliente criado");
        
    } 

    adicionarProdutoNoCarrinho(produto) {
        if(produto instanceof Produto){
            this.carrinho.push(produto);
            console.log(produto.nomeProduto + " Adicionado ao carrinho");
        }else{
            console.log("Impossivel adicionar");
        }
        
    }

    gerarNF(){
        console.log("Nota Fiscal:")
        let total = 0.0;
        let totalItens = this.carrinho.length;
        if(totalItens=== 0){
            console.log("Carrinho vazio, impossivel gerar NF");
            return 0;
        }
        for(let i = 0; i < this.carrinho.length; i++){
            console.log(this.carrinho[i].nomeProduto + " R$:" + this.carrinho[i].precoProduto);
            let preco = this.carrinho[i].precoProduto;
            total = total + preco;
        }
        console.log(`Total : R$ ${total.toFixed(2)}`);
    }

}
export class Produto{
    nomeProduto;
    precoProduto;


    constructor(nomeProduto, precoProduto){
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
        console.log("Produto criado");
    }



    get precoProduto(){
        return this.precoProduto;
    }

    get nomeProduto(){
        return this.nomeProduto;
    }

}
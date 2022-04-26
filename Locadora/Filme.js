export class Filme{
    nome;
    ano;
    produtora;
    locado;

    constructor(nome,ano,produtora){
        this.nome = nome;
        this.ano = ano;
        this.produtora = produtora;
        this.locado = false;
    }

    locar(){
        if(this.status == true){
            return 0;
        }
        this.locado = true;
        console.log(this.nome + " locado por você");
    }

    devolver(){
        if(this.status == false){
            console.log("Esse filme não estava locado");
            return 0;
        }
        this.locado = false;
        console.log("Filme devolvido");
    }

    get status(){
        if(this.locado == true){
            console.log("Esse filme está locado");
            return true;
        }
        else{
            console.log("Não está locado");
            return false;
        }
    }
}
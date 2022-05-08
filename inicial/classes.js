class cachorro{
    constructor(nome,cor){
        this.nome  = nome;
        this.cor = cor;
    }
    latir(){
        console.log("Au au!");
    }
    rolar(){
        console.log("*roll*")
    }

    pet(n){
        for(let i=0;i<n;i++){
            console.log("*pet");
        }
    }

    chamar(){
        console.log(`${this.nome} vem cá!`);
    }

}

cao = new cachorro("cusco", "preto")
cao.chamar();
cao.pet(3);
cao.latir();
cao.pet(2);
cao.rolar();
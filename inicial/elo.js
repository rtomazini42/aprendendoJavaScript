class jogador{
    vitoria;
    derrota;
    rank;

    constructor(vitoria,derrota,rank){
        this.vitoria = vitoria;
        this.derrota = derrota;
        this.rank = rank;
    }

    ganhou(jogador){
        this.rank = jogador.rank * 0.1 + this.rank + jogador.vitoria;
        this.vitoria = this.vitoria + 1;
        jogador.rank = jogador.rank * 0.9 + this.vitoria;
        jogador.derrota = jogador.derrota - 1;
    }

    mostraRank(){
        return this.rank;
    }
}

var jogador1 = new jogador(1,1,100);
var jogador2 = new jogador(2,3,312);

jogador1.ganhou(jogador2);
jogador1.ganhou(jogador2);
jogador1.ganhou(jogador2);
jogador1.ganhou(jogador2);
console.log(jogador1.mostraRank())
console.log(jogador2.mostraRank())
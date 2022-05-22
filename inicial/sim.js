class card{
    atack;
    defesa;

    constructor (atack, defesa){
        this.atack = atack;
        this.defesa = defesa;
    }
    

}

class baralho{
    cards;

    constructor(){
        this.cards = [];
    }

    adicionarCard(card){
        this.cards.push(card);
    }

    mostrarBaralho(){
        for(let i = 0; i < this.cards.length; i++){
            console.log(`${this.cards[i].atack} ${this.cards[i].defesa}`);
        }
    }

}

let card1 = new card(1300,1200);
let card2 = new card(2300,1200);
let card3 = new card(1500,100);

let baralho1 = new baralho;
baralho1.adicionarCard(card1);
baralho1.adicionarCard(card2);
baralho1.adicionarCard(card3);

baralho1.mostrarBaralho();
console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `Porto Alegre`
);

console.log(listaDeDestinos);
listaDeDestinos.push(`Recife`);

let passagemComprada = false;
idadeComprador = 19;
estaAcompanhada = false;
const destino = "Porto Alegre";


const podeComprar = idadeComprador >=18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 4){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existe");
        destinoExiste = true;
        break;
    } else{
        destinoExiste = false;
    }
    contador++;
}

console.log("Destino existe: "+ destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
} else{
    console.log("Temos um erro");
}


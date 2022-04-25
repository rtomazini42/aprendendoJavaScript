console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `Porto Alegre`
);

console.log(listaDeDestinos);
listaDeDestinos.push(`Recife`);
console.log(listaDeDestinos);



//console.log(listaDeDestinos[2]);

const idadeComprador = 21;
const estaAcompanhada = false;
if(idadeComprador >= 18 || estaAcompanhada){
    console.log("Comprador maior de idade ou acompanhado" );
    listaDeDestinos.splice(1,1);
}
else{
    console.log("Não é maior de idade ou nao está acompanhado");
}



console.log(listaDeDestinos);

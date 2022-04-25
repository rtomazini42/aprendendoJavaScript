console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `Porto Alegre`
);

console.log(listaDeDestinos);
listaDeDestinos.push(`Recife`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[2]);


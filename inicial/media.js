/** 
Descrição

Escreva um programa que recebe 3 notas de prova e calcula:

- A média delas

- A média ponderada delas, considerando pesos 2, 2 e 3

- A média ponderada delas, considerando pesos 1, 2 e 2


Formato de entrada

Nota 1
Nota 2
Nota 3

Formato de saída

Média
Média ponderada, considerando pesos 2, 2 e 3
Média ponderada, considerando pesos 1, 2 e 2


obs.: Médias com 2 casas decimais. */

function media1(nota1,nota2,nota3){
    total = nota1 + nota2 + nota3;
    media= total/3;
    return media;
}

function media2(nota1,nota2,nota3){
    total = (nota1*2) + (nota2*2) + (nota3*3);
    media= total/7;
    return media;
}


function media3(nota1,nota2,nota3){
    total = (nota1*1) + (nota2*2) + (nota3*2);
    media= total/5;
    return media;
}

const nota1 = 10
const nota2 = 6
const nota3 = 3

console.log(media1(nota1,nota2,nota3));
console.log(media2(nota1,nota2,nota3));
console.log(media3(nota1,nota2,nota3));
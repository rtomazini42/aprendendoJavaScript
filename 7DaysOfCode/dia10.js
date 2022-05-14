let matriz = [[2,1],[3,6]];
console.log("calculando determinante");

let diagonal1 = matriz[0][0] + matriz[1][1];
let diagonal2 = matriz[1][0]+ matriz[0][1];

let determinante = diagonal1 - diagonal2;
console.log(determinante);
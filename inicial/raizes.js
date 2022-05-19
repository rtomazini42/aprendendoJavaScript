function tirarRaiz(a,b,c,i){
    let vezesRodado = 0;
    lista = [a,b,c,i];
    lista = lista.sort();
    maiorTermo = lista[3];
    let absoluto = Math.abs(maiorTermo);
    for(cont = 0; cont<maiorTermo+1; cont++){
        if(maiorTermo%cont ==0){
        //console.log(`${cont} testando`);
        vezesRodado++;
        let inverso = cont*(-1)
        let resultadoEquacao = a*(cont**3)+b*(cont**2)+c*(cont)+i;
        //console.log(resultadoEquacao)
        if(resultadoEquacao == 0){
            console.log(`${cont} é uma raiz`)
        }
        let resultadoEquacaoInversa = a*(inverso**3)+b*(inverso**2)+c*(inverso)+i;
        //console.log(resultadoEquacaoInversa)
        if(resultadoEquacaoInversa == 0){
            console.log(`${cont} é uma raiz`)
            }
        }
    
        
    }
    console.log(`O programa rodou ${vezesRodado} vezes`);
}

function tirarRaizNaoOtimizado(a,b,c,i){
    let vezesRodado = 0;
    lista = [a,b,c,i];
    lista = lista.sort();
    maiorTermo = lista[3];
    let absoluto = Math.abs(maiorTermo);
    for(cont = 0; cont<maiorTermo+1; cont++){
        //console.log(`${cont} testando`);
        vezesRodado++;
        let inverso = cont*(-1)
        let resultadoEquacao = a*(cont**3)+b*(cont**2)+c*(cont)+i;
        //console.log(resultadoEquacao)
        if(resultadoEquacao == 0){
            console.log(`${cont} é uma raiz`)
        }
        let resultadoEquacaoInversa = a*(inverso**3)+b*(inverso**2)+c*(inverso)+i;
        //console.log(resultadoEquacaoInversa)
        if(resultadoEquacaoInversa == 0){
            console.log(`${cont} é uma raiz`)
            }
        
    
        
    }
    console.log(`O programa rodou ${vezesRodado} vezes`);
}
tirarRaiz(1,-4,-10,40);
tirarRaizNaoOtimizado(1,-4,-10,40);
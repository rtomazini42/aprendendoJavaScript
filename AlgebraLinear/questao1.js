//Verifique se a aplicação de t r3->r2 definida por t(x,y,z) = (z,x+y) é uma transformação linear

function transformacao(x,y,z){
    return ([z, x+y]);
}

//provar que t(u+v) = t(u) + t(v)

function somarTransformacao(tu,tv){
    a = tu[0] + tv[0];
    b = tu[1] + tv[1];
    a.sort();
    b.sort();
    return([a,b]);
}

//t(u)
tu = transformacao("x","y","z");
//t(v)
tv = transformacao("a","b","c");
//t(u+v)
tuv = transformacao("ax","by","zc");
//veriricar se as saidas são iguais:
console.log(tuv);
console.log(somarTransformacao(tu,tv))





function segundograu(a,b,c){
    const delta = (b*b) - 4*a*c;
    raizDelta = Math.sqrt(delta);
    duasa = 2*a;
    x1 = ( raizDelta - b)/duasa
    x2 = (-b - raizDelta)/duasa

    console.log("Os X são X'="+ x1 + "  e x''=" + x2);
}

segundograu(5,-45,0);
console.log("WELCOME");

function tabuada(n){
    for(let i = 0; i < 11; i++){
        let res = i * n;
        console.log(`${i}x${n}=${res}`);
    }
    console.log("++++++");
}

tabuada(2);
tabuada(3);
tabuada(5);
tabuada(11);
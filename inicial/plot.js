function plotarVetor(x,y){
    let linhaVazia="####################";
    for(let i =0 ; i < 10; i++){
        if(i == y){
            process.stdout.write(`${i}|`)
            for(let n = 0; n< 20; n++){
                if(n== x){
                    process.stdout.write(".");
                }else{
                    process.stdout.write("#");
                }
                
            }
            console.log();

        
    }else{
        console.log(`${i}|${linhaVazia}`);
    } 
        }
        
}

plotarVetor(0,0);
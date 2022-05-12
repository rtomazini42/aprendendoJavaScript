class cliente{
    nome;
    #cpf;

    constructor(nome,cpf){
        this.nome=nome;
        this.#cpf = cpf;
    }

    whois(){
        console.log(`o nome do cliente é ${this.nome} e o cpf é ${this.#cpf}`);
    }
}

let cliente1 = new cliente("Renan", "90909090");
cliente1.whois();
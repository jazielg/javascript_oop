export class Cliente {
    #nome = null;
    #cpf = null;

    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
    }
}
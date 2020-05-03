import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    #senha = null
    constructor(nome, cpf, agencia, saldoInicial, senha) {
        super(nome, cpf, agencia, saldoInicial);
        this.#senha = senha;
    }

    sacar(valor) {
        const taxa = 1.02;
        this._sacar(valor, taxa);
    }

    autenticar(senha) {
        return senha == this.#senha;
    }
}
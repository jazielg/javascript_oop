import { Conta } from './Conta.js';

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    #senha = null;

    constructor(nome, cpf, agencia, saldo = 0, senha = null) {
        super(nome, cpf, agencia, saldo); // https://github.com/tc39/proposal-private-methods
        this.#senha = senha;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        const taxa = 1.05;
        this._sacar(valor, taxa);
    }

    static descricaoConta() {
        return 'Descrição da conta corrente: taxa de 5% por saque.';
    }

}
import { Cliente } from './Cliente.js';

// Class abstrata
export class Conta extends Cliente {
    static #saldoBanco = 0;
    #saldo = null;
    constructor(nome, cpf, agencia, saldoInicial) {
        super(nome, cpf);
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata");
        }
        this.agencia = agencia;
        this.#saldo = saldoInicial; // https://github.com/tc39/proposal-private-methods
        console.log(this.constructor);
    }

    /** 
     * Depositar
     * return void
     */
    set saldo(valor) {
        if (valor <= 0) return;
        this.#saldo += valor;
    }

    /**
     * retorna saldo
     */
    get saldo() {
        return this.#saldo;
    }

    // Método abstrato
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato");
    }

    // protected
    _sacar(valor, taxa) {
        const valorMaisJuros = this.#calcularTaxa(valor, taxa);
        if (this.#saldo < valorMaisJuros) return;
        this.#saldo -= valorMaisJuros;
        return valor;
    }

    transferir(valor, conta) {
        this._sacar(valor, 1.10);
        conta.saldo = valor;
    }

    // node --harmony-private-methods index.js 
    #calcularTaxa (valor, taxa) {
        const valorMaisJuros = valor * taxa;
        Conta.#saldoBanco += valorMaisJuros - valor;
        return valorMaisJuros;
    }

    static totalJuros() {
        return this.#saldoBanco;
    }
}
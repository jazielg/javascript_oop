// Node version 14.1.0
import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const contaPoupanca1 = new ContaPoupanca('Alberto', '345.676.454-66', '223', 100, '123');
const contaPoupanca2 = new ContaPoupanca('Maria', '345.676.454-66', '545', 200, '456');
const contaCorrente1 = new ContaCorrente('Carlos', '345.676.454-66', '334', 500);

contaPoupanca1.sacar(50);
contaPoupanca2.sacar(100);
contaCorrente1.transferir(100, contaPoupanca2);

// console.log('contaPoupanca1', contaPoupanca1.saldo);
// console.log('contaPoupanca2', contaPoupanca2.saldo);
// console.log('contaCorrente1', contaCorrente1.saldo);

// console.log(Conta.totalJuros());

console.log(SistemaAutenticacao.login(contaPoupanca1, '123'));
console.log(SistemaAutenticacao.login(contaCorrente1, '780'));


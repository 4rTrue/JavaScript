var nome = window.prompt('qual é seu nome?');
var salario = Number.parseFloat(prompt('Qual o seu salário?'));

document.write(`Seu nome tem ${nome.length} letras<br/>`);
document.write(`Seu nome em letras maiúsculas é ${nome.toUpperCase()}<br/>`);
document.write(`Seu nome em minusculas é ${nome.toLowerCase()}<br/>`);

var str_money = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });

document.write(`Seu salário é ${str_money}`);

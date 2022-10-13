const entrada = document.querySelector('.entrada');
const btnNumeros = document.querySelectorAll('.numero');
const btnPonto = document.querySelector('.ponto');
const operadores = document.querySelectorAll('.operador');
const btnApagar = document.querySelector('.apagar');
const btnApagarTudo = document.querySelector('.apagar-tudo');
const btnCalcular = document.querySelector('.calcular');
const botoes = document.querySelectorAll('button');

function inserirNumero() {
  if(entrada.value[0] === '0' && entrada.value[1] !== '.') {
    entrada.value = this.value;
  } else if(entrada.value[0] !== '0' || entrada.value[1] === '.') {
    entrada.value += this.value;
  }
}

function inserirPonto() {
  const entradaArray = entrada.value.split(' ');
  if(entrada.value.slice(-1) === ' ') {
    entrada.value += '0.';
  } else if(entradaArray.length === 1 && !entradaArray[0].includes('.')) {
    entrada.value += '.';
  } else if(entradaArray.length === 3 && !entradaArray[2].includes('.')) {
    entrada.value += '.';
  }
}

function inserirOperador() {
  if(!possuiOperador()) {
    if(entrada.value[0] === '0') {
      entrada.value += ` ${this.value} `;
    } else if(entrada.value.slice(-1) !== ' ') {
      entrada.value += ` ${this.value} `;
    }
  } else if(possuiOperador() && entrada.value.slice(-1) === ' ') {
    entrada.value = `${entrada.value.slice(0, -3)} ${this.value} `;
  } else {
    calcular();
    entrada.value += ` ${this.value} `;
  }
}

function possuiOperador() {
  for (i in entrada.value) {
    if(['+', '-', '/', '*'].includes(entrada.value[i])) {
      return true;
    }
  }
}

function apagar() {
  if(entrada.value.slice(-1) === ' ') {
    entrada.value = entrada.value.slice(0, -3);
  } else if(entrada.value.length === 1) {
    entrada.value = '0';
  }
  else {
    entrada.value = entrada.value.slice(0, -1);
  }
}

function calcular() {
  if(entrada.value.slice(-1) !== ' ') {
    entrada.value = eval(entrada.value);
  }
}

btnNumeros.forEach(btn => btn.addEventListener('click', inserirNumero));
operadores.forEach(op => op.addEventListener('click', inserirOperador));
btnPonto.addEventListener('click', inserirPonto);
btnApagar.addEventListener('click', apagar);
btnApagarTudo.addEventListener('click', () => entrada.value = 0);
btnCalcular.addEventListener('click', calcular);
botoes.forEach(btn => btn.addEventListener('click', () => entrada.focus()));
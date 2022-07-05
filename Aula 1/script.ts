let numero1 = document.getElementById('numero1') as HTMLInputElement; // objetivo deste HTMLInputElement é dizer para o typescript que esta variável vai ter guardada dentro dela um elemento de Input do HTML do nosso projeto. Com isso, ele aceita usarmos value como atributo dentro da nossa função logo abaixo
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

function calcular(n1, n2) {
    return n1 + n2;
}

botao?.addEventListener('click', function() {
    res.innerHTML = calcular( numero1.value, numero2.value );
});
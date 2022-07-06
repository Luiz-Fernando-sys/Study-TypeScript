var numero1 = document.getElementById('numero1'); // objetivo deste HTMLInputElement é dizer para o typescript que esta variável vai ter guardada dentro dela um elemento de Input do HTML do nosso projeto. Com isso, ele aceita usarmos value como atributo dentro da nossa função logo abaixo
var numero2 = document.getElementById('numero2'); // objetivo deste HTMLInputElement é dizer para o typescript que esta variável vai ter guardada dentro dela um elemento de Input do HTML do nosso projeto. Com isso, ele aceita usarmos value como atributo dentro da nossa função logo abaixo
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});

let numero1 = document.getElementById('numero1') as HTMLInputElement; // objetivo deste HTMLInputElement é dizer para o typescript que esta variável vai ter guardada dentro dela um elemento de Input do HTML do nosso projeto. Com isso, ele aceita usarmos value como atributo dentro da nossa função logo abaixo
let numero2 = document.getElementById('numero2') as HTMLInputElement; // objetivo deste HTMLInputElement é dizer para o typescript que esta variável vai ter guardada dentro dela um elemento de Input do HTML do nosso projeto. Com isso, ele aceita usarmos value como atributo dentro da nossa função logo abaixo
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

function calcular(n1:number, n2:number) { //Quando colocamos o ":number" depois da variável que passamos para a função calcular, ele irá forçar o numero que passamos ser passado como um número. Se não for um número, ele vai dar erro
    return n1 + n2;
}

botao.addEventListener('click', function() {
    res.innerHTML = calcular( +numero1.value, +numero2.value ).toString();
});
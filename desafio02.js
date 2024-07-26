//01 - Criar uma função que exibe "Olá, mundo!" no console.
function texto (){
 console.log("Olá, mundo!");
}
texto ();

//02 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function textoNome(nome) {
 console.log('Ola, ${nome}!');
}
 textoNome('Name');


//03 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function parametroNunero(numero) {
 return número * 2;
}

 let resultDobro = parametroNumero
console.log(resultDobro);

//04 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
function solicitarNumero() {
 let numeroUm = prompt(`Digite o primeiro número`);
 let numeroDois = prompt(`Digite o segundo número`);
 let numeroTres = prompt(`Digite o terceiro número`);

 numeroUm = parseFloat(numeroUm);
 numeroDois = parseFloat(numeroDois);
 numeroTres = parseFloar(numeroTres);

let somatoria = numeroUm + numeroDois + numeroTres;
let media = somatoria/3;
return media;
}

let resultado = solicitarNumero() //Chama a função e guarda o resultado
console.log(resultado);

//05 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function solicitarNumero() {
    let numeroA = prompt('Digite um número');
    let numeroB = prompt('Digite outro número');

    if( parseFloat(numeroA) > parseFloat(numeroB)) {
        return numeroA;
    } else {
        return numeroB;
    }
}
let resultado = solicitarNumero();
console.log(resultado);


//06 - Criar uma função que recebe um número como parâmetro e retorna o resultado
//da multiplicação desse número por ele mesmo
function numeroSolicitado() {
    let numero = prompt('Digite um número');
    numero = parseFloat(numero)

    let multiplicacao = numero * numero;
    return multiplicacao;
}

let aoQuadrado = numeroSolicitado();
console.log(aoQuadrado);
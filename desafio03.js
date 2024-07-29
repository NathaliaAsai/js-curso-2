//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

let peso = parseFloat(prompt(`Qual é o seu peso em kg?(ex.: 60.5)`));
let altura = parseFloat(prompt(`Qual é a sua altura em m? (ex.: 1.70)`));

function imc(peso, altura) {
let alturaQuadrado = altura * altura;
return peso/alturaQuadrado;
}

let imcCalc = imc(peso,altura);
console.log(`seu IMC é: ${imcCalc.toFixed(2)}`);

if (imcCalc>40.0){
 console.log('Obesidade grave - grau III');
 } else if (imcCalc>=30.0 && imcCalc<40.0){
 console.log('obesidade - grau II');
 } else if (imcCalc >=25.0 && imcCalc<30.0){
 console.log('sobrepeso - grau I');
 } else if (imcCalc>=18.5 && imcCalc<25.0){
 console.log('normal');
 }else if (imcCalc<18.5) {
 console.log('magreza');
}
 

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let numero = parseInt(prompt(`Digite um número inteiro`));
let fatorial = 1;

function calcNumero(numero) {
    while(numero > 0) {
    fatorial *= numero; //multiplica fatorial por numero
    numero;
    }
    return fatorial;
}

let numeroFatoiral = calcNumero(numero); 
console.log(`${numero}! = ${numeroFatorial}.`);
    

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
let valor = parseFloat(prompt(`Digite o valor em dólar: U$`));

function conversao(valor) {
    let reais = valor * 4.80;
    return reais;
}

let valorEmReais = conversao(valor);
console.log(`O valor em reais é: R$ ${valorEmReais.toFixed(2)}`);


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

let altura = parseFloat(prompt(`Qual é a altura?`));
let largura = parseFloat(prompt(`Qual é a largura?`));

function calcArea(altura, largura) { 
    let area = altura * largura;
    return area;
}

function calcPerimetro(altura, largura) {
    let perimetro = 2 * (altura + largura);
    return perimetro;
}

let areaSala = calcArea(altura, largura);
let perimetroSala = calcPerimetro(altura, largura); 
console.log(`A sala com ${altura}m de altura e ${largura}m de largura possui ${areaSala}m de área, e seu perímetro é de ${perimetroSala}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let area = parseFloat(prompt(`Qual o raio da sala?`));

function calcArea(raio) { 
    let area = 3.14 * raio * raio
    return area;
}

function calcPerimetro(raio) {
    let perimetro = 2 * 3.14 * raio;
    return perimetro;
}

let areaSala = calcArea(raio);
let perimetroSala = calcPerimetro(raio); 
alert(`A sala circular com ${raio}m de raio possui ${areaSala.toFixed(2)}m.^2 de área, e seu perímetro é de ${perimetroSala.toFixed(2)}m.`);
    

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
let numero = parseInt(prompt(`Digite um número`));
let contador = 0

function calcNumero (numero, contador) {
    let tabuada = numero * contador
    return tabuada;
}

while(contador <=10) {
    let tabuadaNumero = calcNumero(numero, contador);
    console.log(`${numero} x ${contador} = ${tabuadaNumero}.`)
    contador++
}
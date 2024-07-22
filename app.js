//01 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio
let titulo = document.querySelector('h1');//linha 22
titulo.innerHTML = 'Hora do desafio';

//02 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
funtion exibirMensagemNoConsole() {
    console.log('O botão foi clicado')
}

//03 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function exibirAlerta() {
    alert ('Eu amo JS')
}

//04 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function exibirPrompt() {
    let nomeDaCidade = Prompt('Digite o nome de uma cidade brasileira');
    alert('Estive em {$nomeDaCidade} e lembrei de você <3')
}

//05 - Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somaDeDoisNumeros() {
    let primeiroNumero = ParseInt('Digite o primeiro número');
    let segundoNumero = ParseInt('Digite o segundo numero');
    let resultado = primeiroNumero + segundoNumero;
    alert ('{$primeiroNumero} + {segundoNumero} = ${resultado}')
}

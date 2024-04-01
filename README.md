<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="calculadora.js"></script>
</head>
<body>
    <h1> Calculadora Simples</h1>
    <h2>Insira valores para número 1 e 2 para realizar soma</h2>
    <p id="resultado">Resultado:</p>
    <label for="num1">Número 1: </label>
    <input type="number" id="num1">
    <label for="num2">Número 2: </label>
    <input type="number" id="num2">

    <div>
        <button onclick="calcularSoma()">+</button>
        <button onclick="calcularSubtracao()">-</button>
        <button onclick="calcularMultiplicacao()">*</button>
        <button onclick="calcularDivisao()">/</button>
    </div>

</body>
</html>


aaaaaaaaaaaaaaaaaaaaaaaaaaaa

function calcularSoma() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    // Converter os valores para números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    // Verificar se os valores são números
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('resultado').innerText ='Por favor, insira números válidos.';
      return;
    }
    // Calcular a soma dos dois números
    var soma = num1 + num2;
    // Exibir o resultado na página
    document.getElementById('resultado').innerText = 'Resultado:'+ soma;
  }


  function calcularSubtracao() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    // Converter os valores para números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    // Verificar se os valores são números
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('resultado').innerText ='Por favor, insira números válidos.';
      return;
    }
    // Calcular a soma dos dois números
    var soma = num1 - num2;
    // Exibir o resultado na página
    document.getElementById('resultado').innerText = 'Resultado:'+ soma;
  }

  function calcularMultiplicacao() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    // Converter os valores para números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    // Verificar se os valores são números
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('resultado').innerText =
      'Por favor, insira números válidos.';
      return;
    }
    // Calcular a multiplicação dos dois números
    var multiplicacao = num1 * num2;
    // Exibir o resultado na página
    document.getElementById('resultado').innerText = 'Resultado:'+ multiplicacao;
  }
 
  function calcularDivisao() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    // Converter os valores para números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    // Verificar se os valores são números
    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
      document.getElementById('resultado').innerText =
      'Por favor, insira números válidos e certifique-se de que o segundo número não é zero.';
      return;
    }
    // Calcular a divisão dos dois números
    var divisao = num1 / num2;
    // Exibir o resultado na página
    document.getElementById('resultado').innerText = 'Resultado:'+ divisao;
  }


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
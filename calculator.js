function addToDisplay(value) {
    document.getElementById('display').value += value;
    console.log('função addToDIsplay');
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calcular() {
    var expressao = document.getElementById('display').value;
    var operandos = expressao.split(/[+\-*\/]/);
    var operador = expressao.match(/[+\-*\/]/);    
    if (operandos.length !== 2 || !operador) {
        document.getElementById('display').value = 'Erro';
        return;
    }
   var num1 = parseFloat(operandos[0]);
    var num2 = parseFloat(operandos[1]);
    var resultado;
    switch (operador[0]) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('display').value = 'Erro: divisão por zero';
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            document.getElementById('display').value = 'Erro';
            return;
    }
    document.getElementById('display').value = resultado;
}
function addTodisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay(){
    document.getElementById('display').value = '';
}
function calcular(){
    var expressao = document.getElementById('display').value;
    var operandos = expressao.split(/[+\-*\/]/);
    var operador = expressao.match(/[+\-*\/]/);
    if (operandos.length !==2 || !operador) {
        
    }
}
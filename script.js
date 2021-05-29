function calcular() {
var number1 = parseInt(document.getElementById('number1').value);
var number2 = parseInt(document.getElementById('number2').value);
var number3 = parseInt(document.getElementById('number3').value);
document.getElementById('resultado').value = (number1 + number2 + number3);
}

function multiplicar() {
var number4 = parseInt(document.getElementById('number4').value);
var number5 = parseInt(document.getElementById('number5').value);
var number6 = parseInt(document.getElementById('number6').value);
document.getElementById('valor').value = (number4 * number5 * number6);
}

function dividir() {
    var number7 = parseInt(document.getElementById('number7').value);
    var number8 = parseInt(document.getElementById('number8').value);
    var number9 = parseInt(document.getElementById('number9').value); 
    document.getElementById('results').value = (number7 / number8 / number9);
}

function subtração() {
    var number10 = parseInt(document.getElementById('number10').value);
    var number11 = parseInt(document.getElementById('number11').value);
    var number12 = parseInt(document.getElementById('number12').value); 
    document.getElementById('resposta').value = (number10 - number11 - number12);
}
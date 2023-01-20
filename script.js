//  Crear variables para los elementos

const calculo1 = document.querySelector("#calculo1");
const calculo2 = document.querySelector("#calculo2");
const btnCalcular = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#sumResult");

btnCalcular.addEventListener('click', btnOnClick);

function btnOnClick(){
    var number1 = Number(calculo1.value);
    var number2 = Number(calculo2.value);
    var sum = number1 + number2;
    pResult.innerText = "Resultado: " + sum;
}
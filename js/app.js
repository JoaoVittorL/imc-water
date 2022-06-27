const form = document.getElementById('form');
const input_weight = document.getElementById('weight');
const input_height = document.getElementById('height');
const submit_btn = document.getElementById('btn');
const resultImc = document.getElementById('resultImc');
const resultWater = document.getElementById('resultWater');


submit_btn.addEventListener('click', calcular);

function calcular() {
    const input_weightValue = Number(input_weight.value);
    const input_heightValue = Number(input_height.value);
    const calculateImc = (
        input_weightValue / Math.pow(input_heightValue, 2)
    ).toFixed(1);

    if (calculateImc < 18.5) {
        resultImc.innerHTML = ` Seu imc é: ${calculateImc} está abaixo do recomendado \n`;
    } else if (calculateImc <= 24.9) {
        resultImc.innerHTML = ` Seu imc é: ${calculateImc} Normal \n`;
    } else if (calculateImc <= 29.9) {
        resultImc.innerHTML = ` Seu imc é: ${calculateImc} Sobrepeso \n`;
    } else if (calculateImc <= 34.9) {
        resultImc.innerHTML = ` Seu imc é: ${calculateImc} Obesidade grau 1 \n`;
    } else if (calculateImc <= 39.9) {
        resultImc.innerHTML = ` Seu imc é: ${calculateImc} Obesidade grau 2 \n`;
    } else if (calculateImc <= 40) {
        resultImc.innerHTML = ` Seu imc é: ${calculateImc} Obesidade grau 3 \n`;
    } else {
        resultImc.innerHTML = ` Seu imc é: ${calculateImc} Procure um médico \n`;
    }

    const calculateWater = (input_weightValue * 35) / 1000;
    resultWater.innerHTML = `Beba ${calculateWater.toFixed(
        1
    )}L de água por dia`;
}

// logica = imc = peso / (altura ** 2)
//   agua = peso * 35ml

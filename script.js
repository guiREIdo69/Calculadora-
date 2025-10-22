// script.js

let currentInput = "";
let historyInput = "";

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== "" && !isOperator(currentInput.slice(-1))) {
        currentInput += ` ${operator} `;
        updateDisplay();
    }
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    historyInput = "";
    updateDisplay();
}

function calculateResult() {
    try {
        // Exibe o histórico da operação
        historyInput = currentInput;

        // Substitui a string de entrada por uma operação validada e calcula o resultado
        currentInput = eval(currentInput).toString();

        // Atualiza a tela com o resultado
        updateDisplay();
    } catch (e) {
        currentInput = "Erro";
        updateDisplay();
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
    document.getElementById("history").textContent = historyInput;
}


let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById('guessInput').value;
    attempts++;
    
    if (userGuess == randomNumber) {
        displayResult(`¡Correcto! El numero era ${randomNumber}. lo lograste en ${attempts} intentos.`);
    } else if (userGuess < randomNumber) {
        displayResult("muy bajo. Intenta nuevamente.");
    } else {
        displayResult("muy alto. Intenta nuevamente.");
    }
}

function displayResult(message) {
    document.getElementById('result').textContent = message;
}

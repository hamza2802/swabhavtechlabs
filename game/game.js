let correctNumber;

function createBlocks() {
    const blockCount = document.getElementById('blockCount').value;
    const blocksContainer = document.getElementById('blocksContainer');
    const resultDiv = document.getElementById('result');

    resultDiv.textContent = '';
    blocksContainer.innerHTML = '';

    if (!blockCount || blockCount <= 0 || isNaN(blockCount)) {
        resultDiv.textContent = 'Please enter a valid number greater than 0.';
        return;
    }

    correctNumber = Math.floor(Math.random() * blockCount) + 1;

    for (let i = 1; i <= blockCount; i++) {
        const block = document.createElement('button');
        block.classList.add('block');
        block.textContent = i;
        block.onclick = () => checkGuess(i, block);
        blocksContainer.appendChild(block);
    }
}

function checkGuess(guess, block) {
    const resultDiv = document.getElementById('result');

    if (guess === correctNumber) {
        block.style.backgroundColor = '#4CAF50'; 
        resultDiv.textContent = `Congratulations! You guessed the correct number: ${correctNumber}`;
    } else if (guess < correctNumber) {
        block.style.backgroundColor = '#FFEB3B';
        resultDiv.textContent = `Your guess (${guess}) is too low. Try again.`;
    } else {
        block.style.backgroundColor = '#f44336'; 
        resultDiv.textContent = `Your guess (${guess}) is too high. Try again.`;
    }
}

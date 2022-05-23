let binInput = document.querySelector('#bin-input');
let submitBtn = document.querySelector('#submit');
let errorMessage = document.querySelector('#error-message')
let resultText = document.querySelector('#result');
submitBtn.addEventListener('click', (e) => {
    const inputValue = binInput.value;

    if (inputValue.match(/^[0-1]+$/g) === null) {
        errorMessage.innerText = 'Il faut entrer uniquement 0 et 1';
        setTimeout(() => {
            errorMessage.innerText = '';
        }, 10000)
    } else {
        let binaryString = inputValue.split('');
        let binaryNumber = binaryString.map(elem => parseInt(elem, 10))
        binaryNumber.reverse()
        console.log(binaryNumber)
        const result = binaryNumber.reduce(
            (accumulator, currentValue, idx) => accumulator + currentValue * Math.pow(2, idx)
        )

        resultText.innerText = result
    }


})
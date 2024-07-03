// Seleção de elmentos
const generateBtn = document.querySelector('#register-password')
const generateDiv = document.querySelector('#registered-password')


// Funções
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97).toString()
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65).toString()
}

const getNumber = () => {
    return Math.floor(Math.random() * 10)
}

const getSymbol = () => {
    const Symbol = '@#$%&*(-)[]{}+/,.'
    return Symbol[Math.floor(Math.random() * 10)]
}

const generatedPassword = (
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol) => {
    let password = ''
    const passwordLength = 10

    const getAllPassword = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    for(i = 0; i < passwordLength; i = i + 4) {
        getAllPassword.forEach(() => {
            const randomValue = getAllPassword[Math.floor(Math.random() * 4)]()
            password += randomValue
            
        })   
    }
    password = password.slice(0, 12)
    generateDiv.style.display = 'block'
    generateDiv.querySelector('h4').innerText = password
}


// Eventos
generateBtn.addEventListener('click', () => {
    generatedPassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol)
})
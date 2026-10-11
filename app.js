


/*-------------------------------- Constants --------------------------------*/

const numberElements = document.querySelectorAll(".number")
const operatorElements = document.querySelectorAll(".operator")
const equalsElement = document.querySelector(".equals")
const displayElement = document.querySelector(".display")


console.log(equalsElement)



/*-------------------------------- Variables --------------------------------*/

let number1 = ('')
let number2 = ('')
let operator = ('')


console.log(numberElements)
console.log(operatorElements)
console.log(equalsElement)


/*-------------------------------- Functions --------------------------------*/

function handleClickNumber(event) {
    console.log(event.target.textContent)
    if (!number1 && !number2 && !operator) {
        number1 = event.target.textContent
        displayElement.textContent = number1
    }
    else if (number1 && !number2 && !operator) {
        number1 = number1 + event.target.textContent
        displayElement.textContent = number1

    }
    else if (!number2 && number1 && operator) {
        number2 = event.target.textContent
        displayElement.textContent = number2
    }



    else if (number2 && number1 && operator) {
        number2 = number2 + event.target.textContent
        displayElement.textContent = number2
    }
}
console.log(`number 1: ${number1}`)
console.log(`number 2: ${number2}`)
console.log(`operator: ${operator}`)


function handleClickOperator(event) {
    console.log('click on Operator')

    if (event.target.textContent === 'C') {
        number1 = ('')
        number2 = ('')
        operator = ('')
        displayElement.textContent = ''
    } else if (number1 && !number2) {
        operator = event.target.textContent
    }

    console.log(`operator: ${operator}`)
}


function handleClickEquals() {
    if (operator === "+") {
        displayElement.textContent = Number(number1) + Number(number2)

}
  else if (operator === "-") {
    displayElement.textContent = Number(number1) - Number(number2)

}

else if (operator === "*") {
    displayElement.textContent = Number(number1) * Number(number2)
}


else if (operator === "/") {
    displayElement.textContent = Number(number1) / Number(number2)
}
}

console.log('click on equals')


/*----------------------------- Event Listeners -----------------------------*/
equalsElement.addEventListener('click', handleClickEquals)
for (let oneNumberElement of numberElements) {
    oneNumberElement.addEventListener('click', handleClickNumber)
}

for (let oneOperatorElement of operatorElements) {
    oneOperatorElement.addEventListener('click', handleClickOperator)
}
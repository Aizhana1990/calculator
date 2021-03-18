let output = document.querySelector('.output')
let calculator = document.querySelector('.calculator')
let buttons = document.querySelectorAll('button')

let num = ''
let expression = ''
let chekNum = false
let operations = ['+', '-', '*', '/']

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let currentSymbol = btn.textContent

        if (currentSymbol === 'C') {
            clear()
        } else if (operations.includes(currentSymbol)) {
            if (operations.includes(expression[expression.length - 1])) {
                expression = expression.slice(0, expression.length - 1) + currentSymbol
            } else {
                if (chekNum === false) {
                    expression = expression + currentSymbol
                    chekNum = true
                } else {
                    output.textContent = eval(expression)
                    expression = eval(expression) + currentSymbol
                }
                num = ''
            }
        } else if (currentSymbol === '=') {
            result()
        } else {
            addNumber(currentSymbol)
        }
    })
})

function clear() {
    output.textContent = '0'
    num = ''
    expression = ''
}

function result() {
    output.textContent = eval(expression) || 0
    num = ''
}

function addNumber(currentSymbol) {
    num = num + currentSymbol
    expression = expression + currentSymbol
    output.textContent = num
}





//
// let calculator = document.querySelector('.calculator')
// let viewer = calculator.querySelector('.viewer')
// let button = calculator.querySelectorAll('button')
//
// button.forEach((btn) => {
//     btn.addEventListener('click', view)
// })
//
// let num1 = ''
// let equation = ''
// let oneChek = false
//
//
// function view(event) {
//     const target = event.target.innerText
//     if (target === 'C') {
//         num1 = ''
//         equation = ''
//         viewer.innerText = '0'
//     } else if (['+', '-', '*', '/'].includes(target)) {
//         if (oneChek === false) {
//             equation = equation + target
//             num1 = ''
//             oneChek = true
//         } else {
//             viewer.innerText = eval(equation)
//             equation = equation + target
//             num1 = ''
//         }
//     } else if (target === '=') {
//         viewer.innerText = eval(equation)
//         equation = eval(equation)
//     } else {
//         equation = equation + target
//         console.log(equation)
//         num1 = num1 + target
//         viewer.innerText = num1
//     }
// }


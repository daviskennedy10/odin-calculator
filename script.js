function add(x,y) {
    return x+y
}

function subtract(x,y){
    return x-y
}

function multiply(x,y){
    return x * y
}

function divide(x,y){
    return x/y
}

function operate(operator, x, y){
    if(operator === "+"){
        return add(x,y)
    }
    else if(operator === "-"){
        return subtract(x,y)
    }
    else if(operator === "*"){
        return multiply(x,y)
    }
    else if(operator === "/"){
        return divide(x,y)
    }

}

const container = document.querySelector(".result")
const display = document.createElement("h1")
display.classList.add("text")
container.appendChild(display)

let firstNum = null
let secondNum = null
let operator = null
let secondClick = false
let firstNumber = null
let secondNumber = null

/*const numbers = document.querySelectorAll(".box")
numbers.forEach((number)=>{
    number.addEventListener("click", handleClick)
})
*/
/*const number = document.querySelector(".box")
number.addEventListener("click", ()=>{
    const placer = number.firstElementChild
    const placerText = placer.textContent
    display.textContent = placerText
    
})*/

const numbers = document.querySelectorAll(".box, .box-sec")
numbers.forEach((number) =>{
    number.addEventListener("click", ()=>{
        const placer = number.firstElementChild
        const placerText = placer.textContent

        display.textContent += placerText
    })
})

const calcs = document.querySelectorAll(".boz")
calcs.forEach((calc) =>{
    calc.addEventListener("click", ()=>{
        firstNum = display.textContent
        display.textContent = ""
        const placer = calc.firstElementChild
        operator = placer.textContent
    })
})

const equal = document.querySelector(".boz-equal")
equal.addEventListener("click", ()=>{
    secondNum = display.textContent
    firstNumber = Number(firstNum)
    secondNumber = Number(secondNum)
    display.textContent = operate(operator, firstNumber, secondNumber)

})

const ac = document.querySelector(".boz-ac")
ac.addEventListener("click", ()=>{
    display.textContent = ""
    secondNum = null
    firstNum = null
    operator = null
    firstNumber = null
    secondNumber = null
    
})
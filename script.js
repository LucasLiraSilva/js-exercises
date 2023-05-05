// script 1
window.alert('Hello, world!')

// script 2
alert('Script para somar dois números.')
let number1 = Number(prompt('Digite o primeiro número.'))
let number2 = Number(prompt('Digite o segundo número.'))

window.alert(`O resultado é: ${number1 + number2}`)

// script 3
alert('Script para verificar se o valor é um número.')
const isNumber = Number(prompt('Digite algo:'))

if(isNaN(isNumber)){
  alert('Não é um número')
}else{
  alert('Você digitou: ' + isNumber)
}

// script 4
alert('Script para verificar se o valor é uma string.')
let isString = Number(prompt('Digite algo:'))
isString instanceof String
if(isNaN(isString)){
  isString = toString()
  // console.log(typeof isString)
  alert('Digitou uma string.')
}else{
  // console.log(typeof isString)
  alert('Não digitou uma string')
}

// script 5
alert('Script para verificar se o valor é um boolean.')
let isBoolean = prompt('Digite um valor booleano:')

if(isBoolean === "true"){
  isBoolean = true
  // console.log(typeof isBoolean)
  alert('É um boolean')
}else if(isBoolean === "false"){
  isBoolean = false
  // console.log(typeof isBoolean)
  alert('É um boolean')
}else{
  // console.log(typeof isBoolean)
  alert('Não é um boolean')
}

// scripts 6, 7 e 8 parecidos com o 2
alert('Script para subtrair, multiplicar e dividir dois números.')
number1 = Number(prompt('Digite o primeiro número.'))
number2 = Number(prompt('Digite o segundo número.'))

window.alert(`O resultado da subtração é: ${number1 - number2}`)
window.alert(`O resultado da multiplicação é: ${number1 * number2}`)
window.alert(`O resultado da divisão é: ${number1 / number2}`)

// script 9
alert('Script para verificar se um número é par ou ímpar.')
let anyNumber = Number(prompt('Digite um número:'))

if(isNaN(anyNumber)){
  alert('Valor inválido.')
}else{
  //Even
  if(anyNumber % 2 == 0){
    alert(`${anyNumber} é um número par.`)
    //Odd
  }else{
    alert(`${anyNumber} é um número ímpar.`)
  }
}

// script 10 foi feito junto com o 9
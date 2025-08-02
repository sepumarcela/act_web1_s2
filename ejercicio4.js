let a = 10
let b = 3
let operador = '*'

if (operador === '+') {
  console.log(a + b)
} else if (operador === '-') {
  console.log(a - b)
} else if (operador === '*') {
  console.log(a * b)
} else if (operador === '/') {
    if (b === 0) {
    console.log("indeterminado")
  } else {
    console.log(a / b)
  }
} else {
  console.log("operador no válido")
}
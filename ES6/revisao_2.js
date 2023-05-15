// Arrow Function
const somar = (a, b) => a + b
console.log(somar(2, 3))

// quando usamos colchetes para delimitar a função
// precisamos explicitar o return
const subtrair = (a, b) => {
    return a - b
}
console.log(subtrair(5, 3))

// Arrow Function (this)
// sempre aponta para exports
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log("Texto de Exemplo")
log('')

// operador rest
function total(...nums) {
    let total = 0
    nums.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
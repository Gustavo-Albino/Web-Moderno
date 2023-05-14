console.log(this === global)
// False: this aponta para module exports, não para global

console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === global)
    // True: this aponta para global dentro da função
}

logThis()
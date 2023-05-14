const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map((x) => {
    return x * 10
})

// O map não altera o array original, ele gera um novo array

console.log(resultado)

const soma10 = x => x + 10
const triplo = x => x * 3
const paraDinheiro = x => `R$ ${parseFloat(x).toFixed(2).replace('.',',')}`

// Encadeando map
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)
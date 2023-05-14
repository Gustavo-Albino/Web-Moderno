const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

//retorna todos os elementos true do array
//como todo objeto é true, a função retorna todos os objetos
console.log(produtos.filter((produto) => {
    return true
}))

//retorna todos os elementos com preço maior que 1000
console.log(produtos.filter(function(produto) {
    return produto.preco > 1000
}))

//retorna todos os elementos frágeis com preço maior que 500

console.log(produtos.filter((produto) => {
    return produto.preco >= 500
}).filter((produto) => {
    return produto.fragil
}))

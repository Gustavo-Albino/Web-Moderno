const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.2 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

//JSON.parse converte a string para objeto

const precos = carrinho.map(JSON.parse).map((produto) => {
    return produto.preco
})

console.log(precos)
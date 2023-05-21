let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

p.then(function(valor) {
    console.log(valor.x, valor.y)
})


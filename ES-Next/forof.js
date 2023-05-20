for (let letra of "Gustavo") {
    console.log(letra)
}

const topicosECMA = ['Map', 'Set', 'Promise']

for (let i in topicosECMA) {
    console.log(i)
}

for (let topico of topicosECMA) {
    console.log(topico)
}

const topicosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let topico of topicosMap) {
    console.log(topico)
}

for (let chave of topicosMap.keys()) {
    console.log(chave)
}

for (let valor of topicosMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of topicosMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}
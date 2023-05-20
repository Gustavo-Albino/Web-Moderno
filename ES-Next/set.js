//Não aceita repetição / Não é indexada

const times = new Set()

times.add('Atlético-MG')
times.add('Palmeiras')

//Encadeamento de add()
times.add('Flamengo').add('Corinthians').add('Sport')

//O elemento não será adicionado novamente!
times.add('Atlético-MG')

console.log(times)
console.log(times.size)
console.log(times.has('Palmeiras'))

times.delete('Sport')

console.log(times.has('Sport'))

//usa o Set para remover repetições
const nomes = ['Gustavo', 'Cauet', 'Copelli', 'Gustavo']
const nomesSet = new Set(nomes)
console.log(nomesSet)
//let e const
{
    var a = 2;
    let b = 3;
    console.log(b)
}
console.log(a)

//template string
const produto = 'iPad'
console.log(`${produto} é caro!`)

//destructuring
const [firstLetter, secondLetter, ...otherLetters] = 'Gustavo'
console.log(firstLetter, secondLetter, otherLetters)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

//renomeia idade para i
const { idade: i, nome } = { nome: 'Ice Cube', idade: 53}
console.log(i, nome)
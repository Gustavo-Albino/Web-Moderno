const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// síncrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    // converte o arquivo para objeto
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// trabalhando direto com arquivos json
const config = require('./arquivo.json')
console.log(config.db)

// exibindo conteúdo de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta:')
    console.log(arquivos)
})
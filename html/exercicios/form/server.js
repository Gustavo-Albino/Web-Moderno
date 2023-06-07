const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    nome = req.body.nome
    resp.send(`<h1>Parabéns ${nome}!</h1>`)
})

app.listen(5005)
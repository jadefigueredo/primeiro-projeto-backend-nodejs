const express = require("express")

const app = express()
const porta = 3333

const router = express.Router()

function mostraMulher(request, response) {
response.json({
    nome: 'Jade Figueredo',
    imagem: '',
    minibio: 'Desenvolvedora'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
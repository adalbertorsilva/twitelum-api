const app = require('./app')

const port = process.env.PORT;

app.listen(port, function() {
    console.log(`Servidor subiu com sucesso!
    para derrubá-lo aperte Ctrl + C
    para visualizar acesse: http://localhost:${port}`)
})
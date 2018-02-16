module.exports = (app) => {
    const tweetsController = app.controllers.TweetsController

    app.get('/tweets', tweetsController.listar)
    app.get('/tweets/:id', tweetsController.listarUm)
    app.post('/tweets/', tweetsController.adicionar)
    app.get('/tweets/:id', tweetsController.deletar)

}
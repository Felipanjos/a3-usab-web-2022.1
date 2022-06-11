const Produto = require('../models/produto')

module.exports = app => {
    app.post('/produtos/delete-:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body 

        Produto.deleta(id, valores, res)
        res.redirect(302, 'http://localhost:5500/frontend/index.html')
    })
    
    app.post('/produtos/buscaPorId/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Produto.buscaPorId(id, res) 
        // res.redirect(302, 'http://localhost:5500/frontend/updateProduto.html')
    })
    
    app.post('/produtos/patch/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body 
        Produto.altera(id, valores, res)
        res.redirect(302, 'http://localhost:5500/frontend/index.html')
    }) 

    app.get('/lista-produtos', (req, res) => {
        Produto.lista(res);
    })
    
    app.get('/search-produto/:id', (req, res) => {
        const id = parseInt(req.params.id);        
        Produto.buscaPorId(id, res);
    });

    app.post('/produtos', (req, res) => {
        const produto = req.body

        Produto.adiciona(produto, res)
    })

    app.patch('/produtos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body 

        Produto.altera(id, valores, res)
    })

    app.delete('/produtos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Produto.deleta(id, res)
    })
}
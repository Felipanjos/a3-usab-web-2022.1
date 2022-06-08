const customExpress = require('./config/customExpress')
const conexao = require('./controllers/infraestrutura/conexao')
const Tabelas = require('./controllers/infraestrutura/tabelas')

conexao.connect(erro => {
    if(erro)
        console.log(erro)
    else {
        console.log('Conectado');
            
        Tabelas.init(conexao)
        const app = customExpress()
        
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})



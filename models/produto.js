const moment = require('moment')
const conexao = require('../controllers/infraestrutura/conexao')

class Produto {

    adiciona(produto, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(produto.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = produto.cliente.length >=5
    
        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
    
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
    
        if(existemErros) {
            res.status(400).json(erros)
        } else {        
            const produtoDatado = {...produto, dataCriacao,data}
    
            const sql = 'INSERT INTO produtos SET ?'
    
            conexao.query(sql, produtoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(produto)
                }
            })
        }
    }

    lista(res) {
        const sql = 'SELECT * FROM Produtos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) 
                res.satus(400).json(erro)
            else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Produtos WHERE id=${id}`;
    
        conexao.query(sql, (erro, resultados) => { 
            const produto = resultados[0];
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(produto);
            }
        });
    }

    altera(id, valores, res) {
        const sql = 'UPDATE Produtos SET ? WHERE id=?'

        valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro)
                res.status(400).json(erro)
            else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Produtos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro)
                res.status(400).json(erro)
            else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Produto
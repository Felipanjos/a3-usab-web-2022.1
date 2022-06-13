const moment = require('moment')
const conexao = require('../controllers/infraestrutura/conexao')

class Produto {

    adiciona(produto, res) {
        produto.dataRegistro = moment().format('YYYY-MM-DD HH:mm:ss')
        produto.validade = moment(produto.validade, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    
        const valorValido = parseFloat(produto.valor) >= 0

        const validacoes = [
            {
                nome: 'valor',
                valido: valorValido,
                mensagem: 'Valor deve ser maior ou igual a zero'
            }
        ]
    
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
    
        if(existemErros) {
            res.status(400).json(erros)
        } else {        
            const sql = 'INSERT INTO produtos SET ?'
    
            conexao.query(sql, produto, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    // res.status(201).json(produto)
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
        const sql = `UPDATE Produtos SET ? WHERE id=${id}`;

        if(valores.hasOwnProperty("dataRegistro")){
            valores.dataRegistro = moment(valores.dataRegistro, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }
        
        if(valores.hasOwnProperty("validade")){
            valores.validade = moment(valores.validade, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')    
        }

        conexao.query(sql, valores, (erro, resultados) => {
            if(erro)
                res.status(400).json(erro)
            else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = `DELETE FROM Produtos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro)
                res.status(400).json(erro)
            else {
                // res.status(200).json({id})
            }
        })
    }
}

module.exports = new Produto
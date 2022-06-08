class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarProdutos()
    }

    criarProdutos() {
        const sql = 
        "CREATE TABLE IF NOT EXISTS Produtos (" +
            "id int NOT NULL AUTO_INCREMENT," + 
            "imagem varchar(20)," +
            "nome varchar(20) NOT NULL," + 
            "valor float UNSIGNED NOT NULL," +
            "fornecedor varchar(20) NOT NULL," +
            "categoria varchar(20) NOT NULL," +
            "validade date," +
            "dataRegistro datetime NOT NULL," +
            "PRIMARY KEY(id))"
                    
        this.conexao.query(sql, erro => {
            if(erro) 
                console.log(erro);
            else {
                this.criarRegistros()
                console.log("Tabela \"Produtos\" criada e povoada com sucesso.")
            }
        })
    }

    criarRegistros() {
        const sql = "INSERT IGNORE INTO Produtos VALUES" + 
            "(1, 'imagemdaberingela', 'beringela', 4.78, 'fazenda amora','legume','2022-09-18','2022-06-15 23:59:59')," +
            "(2, 'imagemdoiogurte', 'iogurte', 11.00, 'batavo','laticinio','2022-11-28','2022-09-15 23:59:59')," +
            "(3, 'imagemdapilha', 'pilha', 17.59, 'Duracel','pilhas','2028-01-09','2021-09-17 23:59:59')," +
            "(4, 'imagemdoqueijo', 'queijo', 35.78, 'fazendaminasqueijo','laticinio','2022-09-28','2022-04-01 23:59:59')," +
            "(5, 'imagemdorefri', 'refrigerante', 5.00, 'Antartica','bebida','2026-05-18','2020-07-22 23:59:59')," +
            "(6, 'imagembanana', 'banana', 6.50, 'fazenda bananais','fruta','2022-06-04','2022-02-15 23:59:59')," +
            "(7, 'imagemmacarrao', 'macarrao', 3.80, 'fettuccine','massa','2024-08-11','2022-03-15 23:59:59')," +
            "(8, 'imagemagua', 'agua', 2.50, 'indaia','bebida','2027-12-18','2022-01-06 23:59:59')," +
            "(9, 'imagemcremedental', 'cremedental', 4.55, 'colgate','higiene pessoal','2024-05-19','2022-01-02 23:59:59')," +
            "(10, 'imagemcoentro', 'coetro', 2.00, 'fazenda amora','temperos','2022-05-27','2020-11-15 23:59:59');"

        this.conexao.query(sql, erro => {
            if(erro) 
                console.log(erro);
        });
    }

}

module.exports = new Tabelas




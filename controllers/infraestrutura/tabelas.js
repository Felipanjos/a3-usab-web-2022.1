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
            "validade date NOT NULL," +
            "dataCriacao datetime NOT NULL," +
            "PRIMARY KEY(id))"
                    
        this.conexao.query(sql, erro => {
            if(erro) 
                console.log(erro);
            else 
                console.log("Tabela \"Produtos\" criada com sucesso.")
        })
    }

    criarRegistros() {

    }
}

module.exports = new Tabelas

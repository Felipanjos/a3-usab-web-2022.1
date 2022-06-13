class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarProdutos()
    }

    criarProdutos() {
        const sql = 
        "CREATE TABLE IF NOT EXISTS Produtos (" +
            "id int NOT NULL AUTO_INCREMENT," + 
            "imagem varchar(200)," +
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
            "(1, 'https://www.cozinhatecnica.com/wp-content/uploads/2019/01/berinjela.jpg', 'beringela', 4.78, 'fazenda amora','legume','2022-09-18','2022-06-15 23:59:59')," +
            "(2, 'https://superprix.vteximg.com.br/arquivos/ids/199291-600-600/Iogurte-Danone-Vitamina-de-Frutas-1250kg.jpg?v=637623093177000000', 'iogurte', 11.00, 'batavo','laticinio','2022-11-28','2022-09-15 23:59:59')," +
            "(3, 'https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/11/10/1110259_pilha-duracell-pequena-aa-cartucho-com-2-unidades-0-001-duracell_m2_637535645912858927.jpg', 'pilha', 17.59, 'Duracel','pilhas','2028-01-09','2021-09-17 23:59:59')," +
            "(4, 'https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/17179/medium/queijo-parmesao-tradpckg_76439.jpg', 'queijo', 35.78, 'fazendaminasqueijo','laticinio','2022-09-28','2022-04-01 23:59:59')," +
            "(5, 'https://www.oliberal.com/image/contentid/policy:1.521941:1649774907/refrigerante.jpg?f=2x1&$p$f=dbae23c&w=750&$w=a1569b8', 'refrigerante', 5.00, 'Antartica','bebida','2026-05-18','2020-07-22 23:59:59')," +
            "(6, 'https://media.gazetadopovo.com.br/2021/09/22094218/banana-cachos.png', 'banana', 6.50, 'fazenda bananais','fruta','2022-06-04','2022-02-15 23:59:59')," +
            "(7, 'https://master-b2b-img.azureedge.net/product/13209-macarrao-covos-parati-espaguete-500g-g.jpg', 'macarrao', 3.80, 'fettuccine','massa','2024-08-11','2022-03-15 23:59:59')," +
            "(8, 'https://aguamineralhydrate.com.br/wp-content/uploads/2016/02/Garrafa-Agua-Mineral-1-5-litro-entrega.jpg', 'agua', 2.50, 'indaia','bebida','2027-12-18','2022-01-06 23:59:59')," +
            "(9, 'https://st2.depositphotos.com/1050070/10414/i/450/depositphotos_104149230-stock-photo-colgate-tooth-paste-on-white.jpg', 'cremedental', 4.55, 'colgate','higiene pessoal','2024-05-19','2022-01-02 23:59:59')," +
            "(10, 'https://images.freeimages.com/images/premium/previews/5544/55449564-fresh-cilantro-on-the-boards.jpg', 'coentro', 2.00, 'fazenda amora','temperos','2022-05-27','2020-11-15 23:59:59')," +
            "(11, 'https://supernossoemcasa.vteximg.com.br/arquivos/ids/193191-1000-1000/FEIJAO-ROXO-PINK-1KG-PC-T1.jpg?v=637002527976370000', 'Feijão', 8.00, 'Pink Premium','Grãos','2022-09-27','2020-11-15 23:59:59')," +
            "(12, 'https://a-static.mlcdn.com.br/1500x1500/arroz-branco-meu-biju-1kg/armazemtiojoao/20301/68ecf166d94d2b594bd5107730c26d36.jpg', 'Arroz', 7.00, 'Meu Biju','Grãos','2022-09-27','2020-11-15 23:59:59');"

        this.conexao.query(sql, erro => {
            if(erro) 
                console.log(erro);
        });
    }

}

module.exports = new Tabelas




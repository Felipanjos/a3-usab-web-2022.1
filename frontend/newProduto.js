function Header() {
    return(
        <>
            <ul>
                <li><a href="index.html">Mercadinho Fast's</a></li>
                <li><a href="index.html">Produtos</a></li>
                <li><a href="newProduto.html">Cadastrar produto</a></li>
            </ul>
        </>
    )
}

function Form() {
    return(
        <>
            <form method="POST" action="http://localhost:3000/produtos/addproduto" encType="application/x-www-form-urlencoded" id="formadiciona">
                <label for="nome"> Nome </label>
                <input type="text" id="nome" name="nome" placeholder="Insira o nome " required/>
                <label for="Imagem"> Imagem </label>
                <input type="text" id="imagem" name="imagem" required/>
                <label for="Valor"> Valor </label>
                <input type="text" id="valor" name="valor" placeholder="Insira o valor " required/>
                <label for="fornecedor"> Fornecedor </label>
                <input type="text" id="fornecedor" name="fornecedor" placeholder="Insira o fornecedor" required/>
                <label for="categoria"> Categoria </label>
                <input type="text" id="categoria" name="categoria" placeholder="Insira a categoria" required/>
                <label for="validade"> Validade </label>
                <input type="text" id="validade" name="validade" placeholder="Insira a validade"/>
                <input type="submit" id="submit"></input>
            </form>
        </>
    )
}

const app = document.getElementById('root')
const headerBar = document.createElement('div')
    app.appendChild(headerBar)
const form = document.createElement('div')
    form.className = form
    app.appendChild(form)

ReactDOM.createRoot(headerBar).render(<Header />);
ReactDOM.createRoot(form).render(<Form />);
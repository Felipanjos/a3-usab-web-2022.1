function Header() {
    return(
        <>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="newProduto.html">Cadastrar produto</a></li>
            </ul>
        </>
    )
}

function Form() {
    return(
        <>
            <form>
                <input type="text" id="nome" name="nome" placeholder="Insira o nome "/>
                <input type="text" id="imagem" name="imagem"/>
                <input type="text" id="valor" name="valor" placeholder="Insira o valor "/>
                <input type="text" id="fornecedor" name="fornecedor" placeholder="Insira o fornecedor"/>
                <input type="text" id="categoria" name="categoria" placeholder="Insira a categoria"/>
                <input type="text" id="validade" name="validade" placeholder="Insira a validade"/>
            </form>
        </>
    )
}

const app = document.getElementById('root')
const headerBar = document.createElement('div')
    app.appendChild(headerBar)
const form = document.createElement('div')
    app.appendChild(form)

ReactDOM.createRoot(headerBar).render(<Header />);
ReactDOM.createRoot(form).render(<Form />);
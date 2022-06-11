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
            <form method="POST" action="http://localhost:3000/produtos" encType="application/x-www-form-urlencoded">
                <input type="text" id="nome" name="nome" placeholder="Insira o nome " required/>
                <input type="text" id="imagem" name="imagem" required/>
                <input type="text" id="valor" name="valor" placeholder="Insira o valor " required/>
                <input type="text" id="fornecedor" name="fornecedor" placeholder="Insira o fornecedor" required/>
                <input type="text" id="categoria" name="categoria" placeholder="Insira a categoria" required/>
                <input type="text" id="validade" name="validade" placeholder="Insira a validade"/>
                <input type="submit"></input>
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
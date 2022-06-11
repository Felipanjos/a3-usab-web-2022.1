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

var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/lista-produtos', true)

const app = document.getElementById('root')
const headerBar = document.createElement('div')
    app.appendChild(headerBar)
const form = document.createElement('div')
    app.appendChild(form)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    
    if (request.status >= 200 && request.status < 400) {
        data.forEach(produto => {
            const imagem = document.getElementById("imagem")
                imagem.value = `${produto.imagem}` 
            const valor = document.getElementById("valor")
                valor.value = `${produto.valor}` 
            const categoria = document.getElementById("categoria")
                categoria.value = `${produto.categoria}` 
            const validade = document.getElementById("validade")
                validade.value = `${produto.validade}` 
            const fornecedor = document.getElementById("fornecedor")
                fornecedor.value = `${produto.fornecedor}` 
            const nome = document.getElementById("nome")
                nome.value = `${produto.nome}` 
        })
    } else {
            console.log('error')
    }
}

ReactDOM.createRoot(headerBar).render(<Header />);
ReactDOM.createRoot(form).render(<Form />);
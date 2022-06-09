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

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:3000/produtos', true)

const app = document.getElementById('root')
const headerBar = document.createElement('div')
    app.appendChild(headerBar)

const container = document.createElement('div')
container.setAttribute('class', 'container')
    app.appendChild(container)

ReactDOM.createRoot(headerBar).render(<Header />);

request.onload = function () {
        var data = JSON.parse(this.response)
        
        if (request.status >= 200 && request.status < 400){
            data.forEach(produto => {
                console.log(produto)})
        }
}

request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            data.forEach(produto => {
                console.log(produto)
                
                // cria uma section com a classe card
                const card = document.createElement('section')
                card.setAttribute('class', 'card')

                // cria h1 com o nome do cliente
                const h1 = document.createElement('h1')
                h1.textContent = produto.nome

                // Cria elementos p e preenche com informacoes dos produtos
                const pImagem = document.createElement('p')
                pImagem.textContent = `Imagem: ${produto.imagem}` 

                const pServico = document.createElement('p')
                pServico.textContent = `Serviço: ${produto.servico}` 

                const pValor = document.createElement('p')
                pValor.textContent = `Valor: ${produto.valor}`

                const pFornecedor = document.createElement('p')
                pFornecedor.textContent = `Fornecedor: ${produto.fornecedor}`

                const pCategoria = document.createElement('p')
                pCategoria.textContent = `Categoria: ${produto.categoria}`

                const pValidade = document.createElement('p')
                pValidade.textContent = `Validade: ${produto.validade}`

                // Append the cards to the container element
                container.appendChild(card)

                // Each card will contain an h1 and a p
                card.appendChild(h1)
                card.appendChild(pImagem)
                card.appendChild(pValor)
                card.appendChild(pFornecedor)
                card.appendChild(pCategoria)
                card.appendChild(pValidade)
            })
        } else {
                console.log('error')
        }
}

// Send request
request.send()
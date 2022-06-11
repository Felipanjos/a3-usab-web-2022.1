function confirma() {
    return confirm('Tem certeza?')
}

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
request.open('GET', 'http://localhost:3000/lista-produtos', true)

const app = document.getElementById('root')
const headerBar = document.createElement('div')
    app.appendChild(headerBar)

const container = document.createElement('div')
container.setAttribute('class', 'container')
    app.appendChild(container)

ReactDOM.createRoot(headerBar).render(<Header />);

request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            data.forEach(produto => {
                // cria uma section com a classe card
                const card = document.createElement('section')
                card.setAttribute('class', 'card')

                // cria h1 com o nome do cliente
                const h1 = document.createElement('h1')
                h1.textContent = produto.nome

                // Cria elementos p e preenche com informacoes dos produtos
                const pId = document.createElement('p')
                    pId.textContent = `Id: ${produto.id}` 
                    pId.hidden = true
                
                const img = document.createElement('img')
                    img.src = `${produto.imagem}` 
                    img.className = 'alterarguigas'

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

                const update = document.createElement('button')
                    update.textContent = 'Atualizar'
                    update.type = 'submit'

                const deleteForm = document.createElement('form')
                    deleteForm.method = 'post'
                    deleteForm.enctype = 'application/x-www-form-urlencoded'
                    deleteForm.action = `http://localhost:3000/produtos/delete-${produto.id}`
                const apagar = document.createElement('button')
                    apagar.textContent = 'Remover'
                    apagar.type = 'submit'
                    apagar.onclick = confirma
                    deleteForm.appendChild(apagar)
                
                // Append the cards to the container element
                container.appendChild(card)

                // Each card will contain an h1 and a p
                card.appendChild(h1)
                card.appendChild(pId)
                card.appendChild(img)
                card.appendChild(pValor)    
                card.appendChild(pFornecedor)
                card.appendChild(pCategoria)
                card.appendChild(pValidade)
                card.appendChild(update)
                card.appendChild(deleteForm)
            })
        } else {
                console.log('error')
        }
}

// Send request
request.send()
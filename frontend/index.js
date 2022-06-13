function confirma() {
    return confirm('Tem certeza?')
}

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

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toLocalDate(isoDate) {
    var date = new Date(isoDate)
    var month = date.getMonth()

    if (month == 0) {
        month += 1
    }

    return date.getDate() + "/" + month + "/" + date.getFullYear()
}

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:3000/lista-produtos', true)

const app = document.getElementById('root')
const headerBar = document.createElement('div')
    headerBar.className ='headerbar'
    app.appendChild(headerBar)

const container = document.createElement('div')
container.setAttribute('class', 'container')
    app.appendChild(container)

ReactDOM.createRoot(headerBar).render(<Header />);

request.onload = function () {
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            data.forEach(produto => {
                const card = document.createElement('section')
                    card.setAttribute('class', 'card')

                const h1 = document.createElement('h1')
                    h1.textContent = capitalize(produto.nome)

                const pId = document.createElement('p')
                    pId.textContent = `Id: ${produto.id}` 
                    pId.hidden = true
                
                const img = document.createElement('img')
                    img.src = `${produto.imagem}` 
                    img.className = 'card-img'

                const pServico = document.createElement('p')
                    pServico.textContent = `Serviço: ${produto.servico}` 

                const pValor = document.createElement('p')
                    pValor.textContent = `Valor: R$ ${produto.valor}`
                    pValor.className = 'valor'

                const pFornecedor = document.createElement('p')
                    pFornecedor.textContent = `Fornecedor: ${capitalize(produto.fornecedor)}`

                const pCategoria = document.createElement('p')
                    pCategoria.textContent = `Categoria: ${capitalize(produto.categoria)}`

                const pValidade = document.createElement('p')
                    pValidade.textContent = `Validade: ${(toLocalDate(produto.validade))}`
                
                const pRegistro = document.createElement('p')
                pRegistro.textContent = `Registro: ${toLocalDate(produto.dataRegistro)}`

                const deleteForm = document.createElement('form')
                    deleteForm.method = 'post'
                    deleteForm.enctype = 'application/x-www-form-urlencoded'
                    deleteForm.action = `http://localhost:3000/produtos/delete-${produto.id}`
                const apagar = document.createElement('button')
                    apagar.className = 'apagar'
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
                card.appendChild(pRegistro)
                card.appendChild(deleteForm)
            })
        } else {
                console.log('error')
        }
}

// Send request
request.send()
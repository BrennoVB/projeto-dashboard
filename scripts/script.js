const sistema = { // Objeto principal do JS, é aqui onde vai conter a maior parte das funções (metodos) e configurações de usando lógica
    clientes: [],
    cadastrar: function(nome, email, telefone){ // Metodo onde fica salvo os usuarios cadastrados
        let cxNome = document.getElementById('inome')
        let cxEmail = document.getElementById("iemail")
        let cxTelefone = document.getElementById('itelefone')
        
        let valorNome = cxNome.value 
        let valorEmail = cxEmail.value
        let valorTel = cxTelefone.value

        if(valorNome == ''){
         return
        }

        const informacoes = {id: proximoId, nome: valorNome, email: valorEmail, telefone: valorTel} 

        proximoId ++

        this.clientes.push(informacoes) // Aqui é onde fica salvo os dados enviado pelo usurario

        cxNome.value = ''
        cxEmail.value = ''
        cxTelefone.value = ''

        renderizar(this.clientes)
    },
    remover: function(id){ // Função onde removemos um usuario da lista de cadastrados
        let novalista = []

        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].id != Number(id)){
                novalista.push(this.clientes[i])
            }
        }

        this.clientes = novalista

        renderizar(novalista)
    },
    editar: function(id, novoTelefone){ // Função onde editamos o número de telefone do usuario (coloquei somente essa para não ser um projeto longo)

        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].id == id){
                let novoTel = prompt('Digite seu novo telefone: ') // Aqui é a parte onde pedimos o novo número
                this.clientes[i].telefone = novoTel
            }
            
        }

        renderizar(this.clientes)
        
    },
    buscar: function(nome){ // Função que buscamos os nomes dos usuarios cadastrados
        let cxBuscar = document.getElementById("ibuscar")
        let listaFiltrada = []

        if(cxBuscar.value == ''){ // Aqui funciona da seguinte forma, se a caixa buscar tiver vazia mostra toda a lista de usuarios cadastrados, se não vai mostrar somente o nome que foi digitado
            renderizar(this.clientes)
            return
        }

        for(let i = 0; i < this.clientes.length; i++){ // Nesse campo é onde o sistema procura o usuario de acordo com as letras digitada no campo.
            if(this.clientes[i].nome.includes(cxBuscar.value)){
                

                listaFiltrada.push(this.clientes[i])
            }
        }
        
        renderizar(listaFiltrada)
    }
}

let proximoId = 1 // Variavel global que inicia em 1

function renderizar(lista){ // Função onde mostra cada usuario e suas informações
    let listaClientes = document.getElementById('lista-clientes')

    let html = ''

    for(let i = 0; i < lista.length; i++){
        html += '<div class="card-cliente">' + lista[i].nome + ' | ' + lista[i].email + ' | ' + lista[i].telefone + '<button class="btn-editar" onclick="sistema.editar(' + lista[i].id + ')">Editar</button>' + '<button class="btn-remover" onclick="sistema.remover(' + lista[i].id + ')">Remover</button>' + '</div>'
    
    }

   listaClientes.innerHTML = html
    
}    

document.getElementById("btn-cadastrar").onclick = function(){ 
    sistema.cadastrar()
}

document.getElementById('ibuscar').oninput = function(){
    sistema.buscar()
}

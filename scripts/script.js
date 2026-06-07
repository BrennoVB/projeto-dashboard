const sistema = {
    clientes: [],
    cadastrar: function(nome, email, telefone){
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

        this.clientes.push(informacoes)

        cxNome.value = ''
        cxEmail.value = ''
        cxTelefone.value = ''

        renderizar(this.clientes)
    },
    remover: function(id){
        let novalista = []

        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].id != Number(id)){
                novalista.push(this.clientes[i])
            }
        }

        this.clientes = novalista

        renderizar(novalista)
    },
    editar: function(id, novoTelefone){
        let recebeuID

        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].id == id){
                let novoTel = prompt('Digite seu novo telefone: ')
                this.clientes[i].telefone = novoTel
            }
            
        }

        renderizar(this.clientes)
        
    },
    buscar: function(nome){
        let cxBuscar = document.getElementById("ibuscar")
        let listaFiltrada = []

        if(cxBuscar.value == ''){
            renderizar(this.clientes)
            return
        }

        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].nome.includes(cxBuscar.value)){
                

                listaFiltrada.push(this.clientes[i])
            }
        }
        
        renderizar(listaFiltrada)
    },
    listar: function(filtro){

    }
}

let proximoId = 1

function renderizar(lista){
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

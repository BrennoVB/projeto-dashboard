const sistema = {
    clientes: [],
    cadastrar: function(nome, email, telefone){

    },
    remover: function(id){

    },
    editar: function(id, novoTelefone){

    },
    buscar: function(nome){

    },
    listar: function(filtro){

    }
}

let proximoId = 1

function renderizar(lista){
    let listaClientes = document.getElementById('lista-clientes')

    let html = ''

    for(let i = 0; i < lista.length; i++){
        html += '<div>' + lista[i].nome + ' ' + lista[i].email + ' ' + lista[i].telefone + '<button onclick="sistema.editar(' + lista[i].id + ')">Editar</button>' + '<button onclick="sistema.remover(' + lista[i].id + ')">Remover</button>' + '</div>'
    
    }

   listaClientes.innerHTML += html
    
}    

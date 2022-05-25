let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let conteudo = document.querySelector('#conteudo')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let conteudoOk = false

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 1){
        nomeOk = false
    }else{
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 && email.value.indexOf('.') ==  -1){
        emailOk = false
    }else{
        emailOk = true
    }
}

function validaConteudo(){
    let txtConteudo = document.querySelector('#txtConteudo')
    if(conteudo.value.length > 150){
        txtConteudo.innerHTML = 'Limite de caracteres alcançados, diminua o texto'
        txtConteudo.style.color = 'red'
        conteudoOk=false        
    }  
    else{
        caracteres=150
        restante=caracteres-conteudo.value.length
        txtConteudo.innerHTML = "Carácteres restante "+restante
        txtConteudo.style.color = 'white'
        conteudoOk=true
    }
}

function enviar(){
    if(nomeOk == true && emailOk==true && conteudoOk==true){
        alert("Obrigado, mensagem enviada")
    }else{
        alert("Mensagem não enviada: Verifique os campos preenchidos!")
    }
}

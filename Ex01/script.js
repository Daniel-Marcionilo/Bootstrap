/*
    JS é Case Sensitive e tem como padrão camelCase

    podemos acessar o DOM:
    
    por Tag: getElementByTagName()
    por Id: getElementById()
    por Nome: getElementsByName()
    por Classe: getElementsByClassName()
    por Seletor: querySelector()
*/

let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOK = false
let assuntoOK = false

nome.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email inválido!"
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = "Email válido!"
        txtEmail.style.color = 'green'
        emailOK = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres!"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.innerHTML = "Texto válido :D"
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar(){
    if(nomeOK == true && emailOK == true && assuntoOK == true){
        alert("Formulário enviado com sucesso!")
    }
    else{
        alert("Preencha todos os campos corretamente antes de enviar o formulário!")
    }
}
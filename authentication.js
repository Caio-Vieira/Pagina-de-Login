var firebaseConfig = {
    apiKey: "AIzaSyDgh_ODt7taDFK2WzxDAGrROxeWuknmGGU",
    authDomain: "login-95f7b.firebaseapp.com",
    projectId: "login-95f7b",
    storageBucket: "login-95f7b.appspot.com",
    messagingSenderId: "467531108462",
    appId: "1:467531108462:web:559a749f3ea1800514567f"
}

firebase.initializeApp(firebaseConfig)

let auth = firebase.auth()

const email = document.querySelector("#email") //se atentar ao ID

const emailConfirm = document.querySelector("#emailConfirm") //se atentar ao ID

const password = document.querySelector("#password")

const passwordConfirm = document.querySelector("#passwordConfirm")

const sumbmitCreate = document.querySelector("#submitCreateCount").addEventListener("click", confirmData)

const create = document.querySelector("#create").addEventListener("click", openPage)

let createData = document.querySelector("#createCount")

let close = document.querySelector("#close").addEventListener("click", openPage)

function openPage() {
    
    createData.classList.toggle("active")
}



function confirmData() {

    if (password.value === passwordConfirm.value && email.value === emailConfirm.value) {
        createCount()
    }
    else if (password.value !== passwordConfirm.value) {
        alert("As senhas não correspondem")
    }
    else if (email.value !== emailConfirm.value) {
        alert("Os endereços de email não correspondem")
    }
}

function createCount() {
 
    auth.createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
            alert("Conta criada com sucesso")
            openPage()
            email.value = ""
            emailConfirm.value = ""
            password.value = ""
            passwordConfirm.value = ""
        })
        .catch((error) => {
           errorReturn(error)
        })
}


function errorReturn(error) {

    if (error.code == "auth/email-already-in-use") {
        alert("O endereço de email já está sendo utilizado")
    }
    if (error.code == "auth/weak-password") {
        alert("A senha deve ter pelo menos 6 caracteres")
    }
    if (error.code == "auth/invalid-email") {
        alert("Email inválido")
    }
    if (error.code == "auth/user-not-found") {
        alert("Usuário não encontrado")
    }
    if (error.code == "auth/wrong-password") {
        alert("Senha inválida")
    }
    
}
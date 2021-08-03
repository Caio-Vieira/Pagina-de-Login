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

const sumbmitLogin = document.querySelector("#submitLogin").addEventListener("click", login)


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
            email.value = ""
            emailConfirm.value = ""
            password.value = ""
            passwordConfirm.value = ""
            // document.querySelector("h2").style.opacity = "1" mudar isso dps
        })
        .catch((error) => {
           errorReturn(error)
        })
}


const emailLogin = document.querySelector("#emailLogin")
const passwordLogin = document.querySelector("#passwordLogin")


function login() {

    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {

            auth.signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
                .then(() => {
                    location.href = "page.html"
                })
                .catch((error) => {
                    errorReturn(error)
                    
                })
        })
        .catch((error) => {
            console.log(error)
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
}
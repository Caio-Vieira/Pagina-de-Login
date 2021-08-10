const sumbmitLogin = document.querySelector("#submitLogin").addEventListener("click", login)

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
                    console.log(error)
                })
        })
}
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


function expulse() {

    auth.onAuthStateChanged((user) => {
        if (user) {
         console.log(user)
        } else {
          console.log("erro")
        }
    })

}

expulse()
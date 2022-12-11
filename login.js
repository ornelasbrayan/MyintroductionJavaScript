let dbUser="admin@myamazon.com";
let dbPass="sharedpass1234*";

function login(){
    let userName = prompt ("Enter your username");
    let password = prompt ("Enter your password");

    if(userName==dbUser){
        document.getElementById("login-result").innerHTML=`<h2 style="font-family:arial;> Welcome to the admind side!</h2>`;

    }else{
        document.getElementById("login-result").innerHTML=`<p class="alert-error"> Invalid credentials.
        Please try again</p>`;
    }
}
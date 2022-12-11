// let dbUser="admin@myamazon.com";
// let dbPass="sharedpass1234*";

// function login(){
//     let userName = prompt ("Enter your username");
//     let password = prompt ("Enter your password");

//     if(userName==dbUser){
//         document.getElementById("login-result").innerHTML=`<h2 style="font-family:arial;> Welcome to the admind side!</h2>`;

//     }else{
//         document.getElementById("login-result").innerHTML=`<p class="alert-error"> Invalid credentials.
//         Please try again</p>`;
//     }
// }

function calculator(){
    let num1 = Number(prompt("Enter number 1"));
    let num2 = Number(prompt("Enter number 2"));
    let op = prompt("What operation are you looking for? + - / *");

    switch (op){
        case '+':
            document.getElementById("result").innerHTML=`<p> The result is ${num1+num2}</p>`
            break;
        case '-':
            document.getElementById("result").innerHTML=`<p> The result is ${num1-num2}</p>`
            break;
        case '/':
            document.getElementById("result").innerHTML=`<p> The result is ${num1/num2}</p>`
            break;
        case '*':
            document.getElementById("result").innerHTML=`<p> The result is ${num1*num2}</p>`
            break;
    }


}
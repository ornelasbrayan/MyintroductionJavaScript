// let userName;
// let userEmail;
// let password;
// let age;
// let country;
// let salary;//monthly salary 

// userName = prompt("Enter your User Name");
// userEmail = prompt("Enter your Email");
// password = prompt("Enter your password");
// age = prompt("Enter your Age");
// country = prompt("Enter your Country");
// salary = prompt("Enter your monthly salary");

// document.write(`<p>Name: ${userName} </p>
// <p> Email: ${userEmail} </p>
// <p> password ${password} </p>
// <p> Age: ${age} </p>
// <p> Country: ${country} </p> 
// <p> Annual Salary: ${salary*12}</p>`);

// creating function 

// function declaration 
function greeting(){
    console.log("Hello world");
    // alert("Hello world");
    // document.write("Hello world");
    return "Brayan";
}
//globar variable
let global;
function sum(a,b){
    //local variable
    global="affected"; 
    return a+b;
}

console.log(sum(10,50));
console.log(global);

// function expression 
let displayValues= function(){
    console.log("Display values....");
}
displayValues();

// arrow functions 

let traveling = country => "Traveling to ... " + country;

travel = traveling("Italy");

console.log(travel);

let total=0;

function addCart(price){
    total=total+price;
    console.log(total)
    return total;

}


//<script>
//         // JS zone
//         // alert("Hello world!")
//         console.log("This is a message on the console")
//         console.error("Fatal error your computer is nos working")
//         console.warn("This is warning")
//         console.log(10+10)//math operations
//         console.log("10"+"10")//this is a concatenation
//    
console.log("Script file")

// var age=10;//initialization and assignation
let userName="Mike";
let taxes=11.5;
const URL="https://google.com";

// console.log(age, userName, taxes);//Displaying in the console

userName="Edward";//changing the username value
taxes=12;//changing taxes value

console.log("My user name is "+ userName,taxes,URL);//Displaying in the console

//EX1
let numChildren=2;
let partnerName="Clarissa";
let geoLocation="Tijuana";
let jobTitle="Mechatronic Engineering"

//concatenation
// document.write("You will be a "+jobTitle+ " in "+geoLocation+", and married to "+partnerName+" with " +numChildren+" kids");

//template string
// document.write(`
// <p>You will be a ${jobTitle} </p>
// <p>in ${geoLocation}, and married to ${partnerName} </p> 
// <p>with ${numChildren} kids.</p>`)

let product="Filament PLA";
let available=43;
let price=439;
let freeShipping="Tuesday 14, December";
let adress="Tijuana";
let zipCode="22204";
let shipFrom="Amazon";
let seller="Xington Zhilian";
let stars=4;
let ratings=3881;
let policy="It can be returned until January 31, 2023";
let productWeight="1 kg";
let brand="XINGTONGZHILIAN";
let material="Polylactic Acid";
let color="White";
let packageDimension="20.4 x 19.4 x 6.6 cm";

document.write(`
<p> Name of product: ${product} Available: ${available} Price: $${price}</p>
<p> Free Delivery on: ${freeShipping} Adress: ${adress} Zip Code: ${zipCode}</p>
<p> Ship From: ${shipFrom} Seller: ${seller} Stars: ${4} Ratings: ${ratings}</p>
<p> Return policy: ${policy} Product Weight: ${productWeight} Brand: ${brand}</p>
<p> Material: ${material} Color: ${color} Package Dimensions: ${packageDimension}</p>`

)





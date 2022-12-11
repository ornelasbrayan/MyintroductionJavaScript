
// let yourName="Brayan";

// if(confirm("Are you "+ yourName + "?")){
//     console.log("Hello " + yourName);
// }else{
//     console.log("Then what is your name?");
// }

// let number=99;
// if(number==99){
//     console.log("The number is correct");
// }else{
//     console.log("The number is not correct");
// }

// let num1= Number(prompt("Enter the number 1"));//Number() convert a string to a number
// let num2= Number(prompt("Enter the number 2"));

// console.log(num1,num2);

// if(num1<num2){
//     console.log("The num1 is smaller than num2");
// }else if(num2<num1){
//     console.log("The num2 is smaller than num1");
// }else{
//     console.log("The numbers are equal");
// }

// let num1=1;
// let num2=2;
// let num3=3;
// let notTrue=false;

// if(num1<num2&& num3>2){
//     console.log("num1 is smaller than num2 AND num3 is larger than num2");
// }

// if(num1==1 || num2==1 || num3==1){
//     console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
// }

// if(!notTrue){
//     console.log("not true is true!");
// }


//Switch case
const expr='Papayas';
switch(expr){
    case 'Oranges':
        console.log('Oranges are  $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and Papayas are $2.79 a pound.');
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

let op='+';
switch(op){
    case '+':
        console.log(1+1);
        break;
    case '-':
        console.log(1-1);
        break;
    
}

//loop
let database = ["Brayan", "Jhon", "Brianna", "Kevin", "Eddie", "Samantha"];
for(let i=0;i<=5;i++){
    document.write(`<p> ${i} ${database[i]}</p>`);
}

//create a loop  display the numbers of 0 to 12 but 2 by 2

for(let i=0;i<=12;i+=2){
    console.log(`${i}`);
}
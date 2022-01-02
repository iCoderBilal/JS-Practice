// let months = ['Jan', 'Feb' , 'March', 'April'];
// // const indexOfMonths = months.indexOf('Feb');

// months.splice(2,-1);
// if(indexOfMonths != -1){
//     const updateMonths = months.splice(indexOfMonths,1);
//     console.log('We do it');
// }
// else{
//     console.log('Better luck next time');
// }

// console.log(months);


// const best = [1,36,7,8,9,7,4,2,65,7,9,7,464,2,4,8,9,79,7,46,45,769809,8,57,6,87,9,85,7];
// const nobody = best.indexOf(7);
// console.log(nobody);

// let provinces = ['Punjab', 'KPK', 'Balochistan', 'Sindh'];
// let belongTo = provinces.map((curelm, index, arr) => {
// return `The index is ${index} of the ${curelm} is the Province of Pakistan`;
// })

// console.log(belongTo);


// let numbers = [9,16,81,121];
// let squareNumbers = numbers.map((curelm)=>
// {
//     return Math.sqrt(curelm);
// })

// console.log(squareNumbers);


// let numbers = [1,4,7,9,24,78,99];
// let multiNumbers = numbers.map((curElm) => {
//     return curElm * 2;
// }).filter((curElm) => {
//     return curElm > 10;

// })

// console.log(multiNumbers)

// let numbers = [2,4,6,7,8];
// let reduceNumbers = numbers.reduce((accumulator, curelm )=>{
//     return accumulator *= curelm;
// },1000 )

// console.log(reduceNumbers);

// let zone = [
//     [ 'zone1', 'zone2'],
//     [ 'zone3', 'zone4'],
//     [ 'zone5', 'zone6']
// ];

// let zoneSum = zone.reduce((accum, currValue)=>{
//     return accum.concat(currValue)
// })

// console.log(zoneSum);

// let myName = 'Mian Muhammad Bilal';
// console.log(myName.length);

// let myName = 'My name is "Mian Muhammad Bilal".'
// const indName = myName.lastIndexOf('Muhammad');
// console.log(indName);



// let myName = 'Mian Muhammad Bilal';
// console.log(myName.search('Muhammad'));
// let numbers = [1 ,4 ,6, 9, 10];
// let then = numbers.push(11);
// console.log(numbers);




// let number = 110;
// let formula = number%2;

// if(formula == 0){
//     console.log('This is even number')
// }else{
//     console.log('This is odd Number')
// }



// let myNewArray = [
//     [1 , 2],
//     [3 ,4 ],
//     [5 , 6]
// ]

// let newSum = myNewArray.reduce((accum, currValue)=>{
//     return accum.concat(currValue);
// })

// console.log(newSum);


// let theNumbers = 'Mian Muhammad Bilal';
// let newNumber = theNumbers.substr(-3);
// console.log(newNumber);


// Replacing the String Content
// let name = 'Mian muhammad Bilal';
// let newName = name.replace('muhammad', 'Muhammad');
// console.log(newName);

// charAt Method
// let name = 'Mian muhammad Bilal';
// console.log(name.charAt(7));



// charCodeAt Method to find the unicode of Character. Unicode (0 to 65535)
// let myName = 'Mian';
// console.log(myName.charCodeAt(lastChar));



// Upper case and lower case method 

// let myName = 'Mian Muhammad Bilal';
// console.log(myName.toUpperCase());


// let myName = 'Mian Muhammad';
// let fullName = 'Bilal';
// console.log(myName.concat(' ', fullName));

// let myName = '                      Bilal                   ';
// console.log(myName.trim());


// let numbers = '1,2,4,6,7,8';
// console.log(numbers.split());

// let currDate = new Date();
// console.log(currDate.toString());
// console.log(currDate.toLocaleString());

// console.log(Date.now()); it gives data in milliseconds since 1970.

// let tareekh = new Date(2021,11,27);
// console.log(tareekh.toLocaleString());

// let tareekh = new Date('December 27, 2021 12:12:13' );
// console.log(tareekh.toLocaleString());

// let tareekh = new Date(0);
// console.log(tareekh.toLocaleString());

// let tareekh = new Date();
// console.log(tareekh.toLocaleDateString());
// console.log(tareekh.setFullYear(2022));
// console.log(tareekh.setMonth(11));
// console.log(tareekh.setDate(12));


// let newDate = new Date();
// console.log(newDate.getTime());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());

// let number = 10.6;

// console.log(Math.PI);

// let myNumber = console.log(Math.round(number));
// console.log(Math.pow(myNumber,4));

// console.log(Math.sqrt(36));
// console.log(Math.abs(-1000));


// console.log(Math.ceil(1.01));
// console.log(Math.floor(2.09999999999999999999999999999999999999));
// let numbers = [-937536583, -76210751, -8621875368265, 783265876];

// console.log(Math.min(-937536583, -76210751, -8621875368265, 783265876));

// console.log(Math.floor(Math.random()*10));

// console.log(Math.trunc(2.7));
// console.log(Math.trunc(-2.9));




// alert(location.href);
// if(confirm("Did you want to visit icoderBilal Portfolio")){
//     location.href = 'https://icoderbilal.dorik.io/';
// }


// let myData = {
//     myName : {
//         mysurname : 'Mian',
//         myfullname : 'Mian Muhammad Bilal'
//     },
//     myAge : 26,
//     getData (){
//         console.log(`My name is ${myData.myName} and my age is ${myData.myAge}.`)
//     }
// }

// console.log(myData.myName.mysurname);


// const myData = ['mian muhammad Bilal' , 18 , 2004];
// let myName = myData[0];
// let myAge = myData[1];

// console.log(myAge);
// const myData = ['mian muhammad bilal' , 18 , 2003]
//  let [myName,myAge,myDate, myFirstName = 'Mian'] = myData;

// console.log(myFirstName);

// let myDate = {
//     myName : 'Mian Muhammad BIlal',
//     [2 + 18] : 'this is my age.' ,
//     mybirth : 2004
// }

// console.log(myDate);

// let myname = 'Muhammad Bilal';
// let myage = 26;

// let mybiodata = {
//     myname,
//     myage
// }
// console.log(mybiodata);

// let mycolors = ['yellow', 'green' , 'white'];
// let newcolors = [...mycolors, 'peech ' ]

// console.log(newcolors);


// const myName = "Mian Muhammad Bilal".padStart(3)
// console.log(myName);

// let mydata = {myname: 'Mian Muhammad Bilal', myage : 27}
// console.log(Object.entries(mydata));

// let myName = {
//     name : "Mina Muhammad Bilal"
// };

// let otherpersonname = {
//     ...myName
// }

// console.log(myName);
// console.log(otherpersonname );


// let arr = [
//     ['zone1' , 'one2'],
//     ['zone3', 'zone4'],
//     ['zone5', 'zone6'],
//     ['zone7', ['zone8', 'zone9']]
   

// ];

// console.log(arr.flat(3));

// let arr = {
//     myName : 'Mian Muhammad Bilal',
//     myAge : 26,

// }

//     const newArr = Object.entries(arr);
//     console.log(Object.fromEntries(newArr));


// const maxNumber = 9007199254740991n + 19n;
// console.log(typeof maxNumber);


// const number = NaN ?? 'Mian';
// console.log(number);
// "use strict"
//  myName = 'Mian Muhammad Bilal';
//  console.log(myName);


// const plus = function(a,b){
//     return a+b;
// }

// const sub = function(a,b){
//     return a-b;
// }

// const cal = function(num1, num2 , operator){
//     return operator(num1, num2);
// }


// console.log(cal(plus));


// const myName = 'Mian Muhammad bilal';

// const mybrother = function(){
//     let mybrothername = 'Talha Jamal';


// const together = function(){
//     let stick = (together+mybrother);
    
// }
// }
// console.log(myName+mybrother);


//  


// function sum(a=12,b=34){
//     const numbersum = a + b;
//     return numbersum;
// }

// function percentage(sum){
//     let per
// }

// console.log(sum());


// function check(a){
//     let formula = a%2;
//     return formula;
// }
// check(10);

// if(formula == 0){
//     console.log('this is even number.')
// }else{
//     console.log('this is odd number');
// }


let number = 13;


let onemoreformula = number%2;

if(onemoreformula==0){
    console.log('this is even number');

}else{
    console.log('this is odd number')
}




    
    






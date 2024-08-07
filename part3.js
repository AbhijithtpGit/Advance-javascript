// function
function myFun(){
let a=5;
console.log(a)
}
myFun();

function myFun2(){
    let a =10;
    let b= 20
    let c =a+b;
    
    return c;

}
console.log(myFun2());

function fun(){
    console.log('finsher');

}
console.log(fun());

// paremerter passing

function pm(d){
    let a=100;
    let b=d;
    let c=a+b;
    return c;
}
console.log(pm(100))


// objects
let user ={
    name:'abhijith',
    age:22,
    place:"bathery"

}
console.log(user)

// array

let array=["abhi",22]
console.log(array[0]);

// array properties

let a= "abhijith";
// length
console.log(a.length);
// indexof
console.log(a.indexOf("b"));
// last index
console.log(a.lastIndexOf('h'))
// sclice
let b=a.slice(0,8);
console.log(b);

// number methods

// string into interger
let n="20";
let g =30;
console.log( parseInt(n));
console.log(g);
// integer into string

let m= 10;
let h=20;
console.log( h.toString())


// array methodes

// replce values
let myArrya =["a","b","c"];
myArrya[0]="z";
console.log(myArrya);

// adding values
myArrya.push("d");

// removing value
myArrya.pop();

// adding value in the front
myArrya.unshift("p");

// removing form front 
myArrya.shift();

// array lenth
console.log(myArrya.length);

// customiesd removing values
myArrya.splice(0,1);

// customiesd adding values
myArrya.splice(1,0,"a");

// sorting
myArrya.sort();



// object
let myobt={
   fname:"abhi",
   lname:"jith"
}
console.log(myobt);

// adding value in objest
myobt.fname="abh";

// delect value
delete myobt.fname;

// if condtion
let Age=20;
if(Age==20){
    console.log("you can come");
}else{
    console.log("you not comeing");
}


// switch condtion
let cars ="bmw";
switch(cars){
    case "bike":
        console.log("no");
        break;
case "bmw":
    console.log("yes");
    break;
default:
    console.log("not maching");
}

// loop

// for loop
let num=20;
for(let i=0;i<=20;i++){
    console.log(i);
}

// arrya looping

myArrya=["abhi","jith","tp"];
for(i=0;i<myArrya.length;i++){
    document.write(myArrya[i] +"<br>");
}
// events
function onalert(){
 alert("clicked");
}



// spread operaters

const globalpalyer={
    id:0,
    name:"bot",
    powerlevel:100,
};

const player1={ ...globalpalyer};//--->sperd operter
player1.powerlevel=50

const player2={...globalpalyer}
player2.name="Cr7";

console.log( globalpalyer);
console.log(player1);
console.log(player2);


//spread operaters in array

const globalpalyer1=["abhi","jith","tp"];

const globalpalyer2=["hi","how","are you"];

const players={...globalpalyer1,globalpalyer2};

console.log(players);

// D stuture array

const name=["abhi","tp"];
const [first,second,third]=name;
console.log(first,second);

// D strutuing object

const ob={
id:1,
names:"abhijith",
age:22,
};
const {names,age,id}=ob;
console.log(names,age,id);


// rest operater

const person={
    personname:"abhijith",
    personid:10,
    personage:22,
};

const  {personeid,...rest}=person;
console.log(personeid);
console.log(rest);

// arrow function

const fun =() =>{
    console.log("hi");

}
fun();


// for Each method

const container =[
    {
        id:1,
        pname:"abhi",
        page:22,
    },
    {
        id:2,
        pname:"jith",
        page:20,
    },
    {
        id:3,
        pname:"Tp",
        Page:23,
    },
];

for(let i=0;i<container.length;i++){
    console.log(container[i]);
}

container.forEach((value,index,array)=>{
    console.log(array);
})


// map method

const thisarray =container.map(value =>value.pname);
console.log(thisarray);

// filter

const thisarrray =container.filter(value =>value.page==20);
console.log(thisarrray);

// reduce

const numarray =[10,20,30,50];
const num =numarray.reduce((total,value) => total +value,0 );
console.log(num);

// find

const smobj=[{
    name:"sunny",
    age:22,
},
{
    name:"miya",
    age:21,
},];
const nobj =smobj.find((value) => value.name == "sunny");
console.log(nobj);

// sort 

const sortarrya =[10,3,9,90,67,];
const sorrt =sortarrya.sort((a,b) => a-b);
console.log(sorrt);






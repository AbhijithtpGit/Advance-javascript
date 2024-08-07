// local storage


// set item in local storgr

// localStorage.setItem()

// get item

// localStorage.getItem();

//removing item

// localStorage.removeItem();

// clear item 

// localStorage.clear();

// items key 

// localStorage.key();


// localStorage.setItem()
localStorage.setItem("id","0");
localStorage.setItem("token","abc");
localStorage.setItem("name","abhi");

// localStorage.getItem();
document.write(localStorage.getItem("id"));
document.write(localStorage.getItem("name"));

//removing item
localStorage.removeItem("id");

// localStorage.key();
localStorage.key(0);
console.log(localStorage.key(1));

// cleritem
localStorage.clear();



// all in one object
const  obj={
    id:0,
    name:"abhi",
};

localStorage.setItem("data",JSON.stringify(obj));

console.log(JSON.parse(localStorage.getItem("data")));



//  login and logout form

const input =document.querySelector("input");
const loginbtn =document.querySelector("#login");
const logoutbtn =document.querySelector("#logout");
const h1 =document.querySelector("h1");


loginbtn.onclick=()=>{
    if(input.value){
        localStorage.setItem("token",input.value);
        h1.innerText="WELLCOME USER"

    }
};

logoutbtn.onclick=()=>{
    localStorage.clear();
    location.reload();
}



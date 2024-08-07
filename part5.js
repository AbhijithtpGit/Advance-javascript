// javascript object nottation (json)


// sample object

const strobj= {
    id:1,
    name:'abhijith',
    company:"google",
};
console.log(strobj);


// json format

const jsonobj =`{
   'id':1,
   'name':"abhijith",
   'companye':'google',

}`;

// string format to object format

const jobject=JSON.parse(jobject);

console.log(jobject);


// json object to string

const stringfyi= JSON.stringify(strobj);
console.log(stringfyi);

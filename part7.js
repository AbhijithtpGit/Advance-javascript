
// modules

import {mystring ,myfun} from "./varable.js";
console.log(mystring);
console.log(myfun())

// using anye name


// import {mystring  as name,myfun as new} from "./varable.js";
// console.log(newname);
// console.log(new())


// export defult function

import change from"./varable.js";
console.log(change());

// star

import * as utils from"./varable.js";
console.log(utils.myfun());
console.log(utils.mystring);
console.log(utils.default());

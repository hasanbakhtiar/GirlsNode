// const info = 1.9;
// const result = Math.floor(info);
// console.log(result);

import { ultrabooks } from "./data.js";


// const info = Math.round(Math.random()*10);
// console.log(info);


// const groupMembers = ["Dinara","Banu","Shahla","Aysun","Aytac"];
// let selecterMember = Math.round(Math.random()*groupMembers.length);
// console.log(groupMembers[selecterMember]);



// const info = " Hello JavaScript ";
// console.log(info.trim());

// console.log(info.splice(0,2));



// const myArr = [];

// for (let index = 0; index < ultrabooks.length; index++) {

//     myArr.push(`Laptop Model:${ultrabooks[index].title} | price:${ultrabooks[index].price} USD`);
    
// }

// console.log(myArr.sort());



// ultrabooks.map((item,index)=>{
//     console.log(index);
// })

// ultrabooks.forEach((item,index)=>{
//     console.log(item);
    
// })


const filteredData = ultrabooks.find((p)=>(p.price<1300) );
console.log(filteredData);








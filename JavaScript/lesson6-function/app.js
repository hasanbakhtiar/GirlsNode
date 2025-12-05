const gamingLaptops = [
    { title: "Acer Predator Helios 300", price: 1899, color: "Black", stock: 30, category: "Gaming" },
    { title: "ASUS ROG Strix G15", price: 1799, color: "Gray", stock: 30, category: "Gaming" },
    { title: "MSI GE76 Raider", price: 2499, color: "Black", stock: 30, category: "Gaming" },
    { title: "Lenovo Legion 5 Pro", price: 1699, color: "White", stock: 30, category: "Gaming" },
    { title: "HP Omen 17", price: 1999, color: "Black", stock: 30, category: "Gaming" },
    { title: "Razer Blade 15", price: 2299, color: "Silver", stock: 30, category: "Gaming" },
    { title: "Dell Alienware M15", price: 2399, color: "Black", stock: 30, category: "Gaming" },
    { title: "Gigabyte AORUS 15P", price: 1899, color: "Black", stock: 30, category: "Gaming" },
    { title: "ASUS TUF Gaming F17", price: 1499, color: "Gray", stock: 30, category: "Gaming" },
    { title: "MSI GP66 Leopard", price: 1699, color: "Black", stock: 30, category: "Gaming" }
];

const ultrabooks = [
    { title: "MacBook Air M2", price: 1299, color: "Silver", stock: 30, category: "Ultrabook" },
    { title: "Dell XPS 13", price: 1399, color: "White", stock: 30, category: "Ultrabook" },
    { title: "HP Spectre x360", price: 1499, color: "Blue", stock: 30, category: "Ultrabook" },
    { title: "Lenovo ThinkPad X1 Carbon", price: 1699, color: "Black", stock: 30, category: "Ultrabook" },
    { title: "ASUS ZenBook 14", price: 1199, color: "Gray", stock: 30, category: "Ultrabook" },
    { title: "Microsoft Surface Laptop 5", price: 1599, color: "Green", stock: 30, category: "Ultrabook" },
    { title: "Acer Swift X", price: 1099, color: "Gold", stock: 30, category: "Ultrabook" },
    { title: "Samsung Galaxy Book3 Pro", price: 1499, color: "Graphite", stock: 30, category: "Ultrabook" },
    { title: "LG Gram 16", price: 1490, color: "Silver", stock: 30, category: "Ultrabook" },
    { title: "Huawei MateBook X Pro", price: 1690, color: "Green", stock: 30, category: "Ultrabook" }
];

const budgetLaptops = [
    { title: "Acer Aspire 5", price: 599, color: "Silver", stock: 30, category: "Budget" },
    { title: "Lenovo IdeaPad 3", price: 549, color: "Blue", stock: 30, category: "Budget" },
    { title: "HP 15s", price: 519, color: "Black", stock: 30, category: "Budget" },
    { title: "ASUS VivoBook 15", price: 629, color: "Gray", stock: 30, category: "Budget" },
    { title: "Dell Inspiron 3520", price: 599, color: "White", stock: 30, category: "Budget" },
    { title: "Acer Extensa 15", price: 489, color: "Black", stock: 30, category: "Budget" },
    { title: "Lenovo V14 G3", price: 499, color: "Silver", stock: 30, category: "Budget" },
    { title: "HP Pavilion 14", price: 649, color: "Gold", stock: 30, category: "Budget" },
    { title: "ASUS X509", price: 539, color: "Black", stock: 30, category: "Budget" },
    { title: "Dell Vostro 3401", price: 569, color: "Gray", stock: 30, category: "Budget" }
];





const infoOne=(a)=>{
    return a;
}

const infoTwo=(b)=>{
    return b;
}
console.log(infoOne("Hello",()=>{
    infoTwo("Hello",()=>{
        
    })
}));









// const filterProduct = (data, price) => {
//     for (let i of data) {
//         if (i.price < price) {
//             console.log(i.title);
            
//         }
//     }
//     console.log("----------------------------------------------------");
// }


// filterProduct(gamingLaptops,2000);
// filterProduct(ultrabooks,1700);
// filterProduct(budgetLaptops,500);




// function name(params){
//     code 
// }


// function calculateAge(name,birthYear){
//     console.log(name+" age:"+ (2025-birthYear));
// }

// calculateAge("Hasan",1997)
// calculateAge("Fatima",2003)




// function infoOne() {
//   return "Hello";
// }


// function infoTwo(){
//     return 10+infoOne();
// }

// console.log(infoTwo());



// function info() { //Function declaration
//     return "hello"
// }

// const info = function(){ //Function Expression
//     return "Hello"
// }



// Arrow Function (ES6)
// const info = ()=>{

// }

// console.log(info());


// (IIFE) Immediately Invoked Function Expression

// (function(){
//     console.log('Start');
    
// })()
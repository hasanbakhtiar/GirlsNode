// let infoOne: number = 5;
// let infoTwo: string = "Hello";
// let infoThree: boolean = true;

// infoOne = 10;

// console.log(infoOne,infoTwo,infoThree);



// const info:string[] = ["Apple","Banana","Mongo"];
// const info: Array<number | string> = ["Apple", "Banana", "Mongo", 5, 6];
// console.log(info);

// type productType = {
//     title: string,
//     price: number,
//     stock: boolean,
//     color: Array<string | number>
// }

// const product: productType[] = [
//     {
//         title: 'apple',
//         price: 2,
//         stock: true,
//         color: ['red', 'green', 5]
//     },
//     {
//         title: 'apple',
//         price: 2,
//         stock: true,
//         color: ['red', 'green', 5]
//     },
//     {
//         title: 'apple',
//         price: 2,
//         stock: true,
//         color: ['red', 'green', 5]
//     }
// ]


// product.map((item: productType) => {
//     console.log(item.title);

// })

// ===========================================================

// type Rating = {
//     rate: number;
//     count: number;
// };

// type productTypes = {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: Rating;
// };


// const fetchData = (): void => {
//     fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(data => {
//             data.map((item: productTypes) => console.log(item.title))
//         });
// }

// fetchData();



export { };
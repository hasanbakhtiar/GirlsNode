enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

type Status = "active" | "inactive" | "pending";
type User = {
    name: string
}


type Admin = User & {
    role: string;
};

const admin: Admin = {
    name: "Hello",
    role: "admin"
}
console.log(admin);


type productType = {
    title: string,
    price: number,
    color: Color,
    status: Status
}


const product: productType[] = [
    {
        title: "a",
        price: 1,
        color: Color.Red,
        status: "active"
    }
]


function test(count: number, data: productType[]) {
    data.push({
        title: "b",
        price: 2,
        color: Color.Blue,
        status: "pending"
    })
    console.log(count, data);

}

test(5, product);
// ts ile bir login hazirlayin burdan role base olsun
// ts ile dummyjsonda olan melumatlari cekin 
// qeyd ts syntax riayet edin.

export { };
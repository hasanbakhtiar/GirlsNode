const express = require('express');
const app = express();


// app.use((req, res, next) => {
//     console.log('middleware1');
//     next();

// });

// app.use((req, res, next) => {
//     console.log('middleware2');
//     next();

// });


// app.use((req, res, next) => {
//     console.log('middleware3');
//     res.end();

// });


const user = {
    email: "hasan@webluna.org",
    password: "hasan123"
}



app.use('/login', (req, res, next) => {
    if (user.email === "hasan@webluna.org" && user.password === "hasan123") {
        console.log('Login successfull');
        next();
    } else {
        console.log("Wrong");
        
    }
})


app.use('/', (req, res) => {
    res.send("Home page");
})

app.listen(3000, () => {
    console.log("Express server running on port 3000");
})

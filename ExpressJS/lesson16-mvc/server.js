const express = require("express");
const app = express();
const res = require("express/lib/response");


app.set('view engine', 'ejs');
app.set('views', './views/pages');

app.use(express.urlencoded({ extended: true }));


app.post("/contact", (req, res) => {
  const { name, surname, email, phone, message } = req.body;
  res.send(`Ad: ${name}, Soyad: ${surname}, Email: ${email}, Tel: ${phone}, Mesaj: ${message}`);
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    headText:"Contact page"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    headText:"About page"
  });
});

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    headText:"Home page"
  });
});



app.listen(3000, () => {
  console.log("server running on port 3000");
});

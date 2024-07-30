const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res, next) => {
  res.render("home-page")
});

app.get("/contact", (req, res, next) => {
    res.render("contact-page")
});

app.get("/margherita", (req, res, next) => {
  pizza = {
    name: "Margherita",
    price: 12,
    imgName: "pizza-margherita.jpg",
    imgAlt: "Margherita Pizza",
    ingredients: ["mozzarella", "pizza sauce", "basil"]
  };
  res.render("product", pizza);
});

app.get("/veggie", (req, res, next) => {
  pizza = {
    name: "Veggie",
    price: 13,
    imgName: "pizza-veggie.jpg",
    imgAlt: "Veggie Pizza",
    ingredients: ["mozzarella", "pizza sauce", "basil", "mushrooms"]
  };

  res.render("product", pizza);
});

app.get("/seafood", (req, res, next) => {
    pizza = {
        name: "Seafood",
        imgName: "pizza-seafood.jpg",
        imgAlt: "Seafood Pizza",
        ingredients: ["mozzarella", "pizza sauce", "basil", "seafood"]
      };
    
      res.render("product", pizza);
});

app.listen(3000);

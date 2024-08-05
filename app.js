const express = require("express");
const hbs = require("hbs");
const Pizza = require("./models/Pizza.model");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

mongoose
  .connect("mongodb://127.0.0.1/test-restaurant")
  .then((x) => {
    console.log(`Connected! Database name: "${x.connections[0].name}"`);
  })
  .catch((e) => console.log("Error connecting to DB", e));

app.get("/", (req, res, next) => {
  res.render("home-page");
});

app.get("/contact", (req, res, next) => {
  res.render("contact-page");
});

app.get("/pizzas", (req, res, next) => {

    let title = req.query.title;

    let filter = {};
    if(title){
        filter = {title: {$in: title}}
    }
  Pizza.find(filter)
    .then((pizzasArr) => {
      const data = {
        pizzasArr: pizzasArr,
      };
      res.render("product-list", data);
    })
    .catch((e) => {
      console.log("error getting pizzas from DB", e);
    });
});

app.get("/pizzas/:pizza", (req, res, next) => {
  Pizza.findOne({ title: req.params.pizza })
    .then((pizzaFromDB) => {
      console.log(pizzaFromDB);
      res.render("product", pizzaFromDB);
    })
    .catch((e) => {
      console.log("error getting pizza from DB", e);
    });
});

app.listen(3000);

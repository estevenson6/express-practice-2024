const mongoose = require("mongoose");
const Pizza = require("./models/Pizza.model");


mongoose
  .connect("mongodb://127.0.0.1:27017/test-restaurant")
  .then((response) => {
    console.log(`Connected! Database Name: "${response.connections[0].name}"`);

    const pizzaOne = {
        title: "Veggie",
        price: 18,
        dough: "classic"
    };

    return Pizza.create(pizzaOne);
  })
  .then((pizzaFromDB) => {
    console.log("Your pizza was created!", pizzaFromDB._id)
    return Pizza.find({title: "Seafood"})
  })
  .then((pizzasArr) => {
    console.log("I currently have this many pizzas...", pizzasArr.length);
    // console.log(pizzasArr);

    return Pizza.deleteMany({title: "Veggie"});
  })
  .then(() => {
    return Pizza.find()
  })
  .then((pizzas) => {
    console.log(pizzas.length)
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB", e);
  });

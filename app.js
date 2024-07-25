const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  console.log("we received a request to /homepage");
  res.sendFile(__dirname + "/views/home-page.html")
});

app.get("/contact", (req, res, next) => {
  console.log("we received a request to /contactpage");
  res.sendFile(__dirname + "/views/contact-page.html")
});

app.listen(3000);

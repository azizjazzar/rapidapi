require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const hostname = 'localhost';
const port = 9090;
const app = express(); 
const stripe = require("stripe")('sk_test_51OErmACis87pjNWpHjxy4jOfBeV5X2cD3bB2op5qNVdo8OY7pqpqJh235cFlSwbjNxfjsz6FMZAD1EVCWJs2kyDq00LYDaUrax');
connectDB();
app.use(express.json());
app.set('views','./views')
app.set('view engine','ejs')

app.get("/", (req, res) => {
  res.render("home")
});

app.use("/api/auth", require("./routes/auth"));



app.listen(3000, '0.0.0.0', function() {
  console.log('Listening to port:  ' + 3000);
})

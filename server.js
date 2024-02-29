require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express(); 
app.use(express.json());


app.get("/", (req, res) => {
  res.send("aaaaa")
});

app.use("/api/", require("./routes/auth"));



app.listen(3000, '0.0.0.0', function() {
  console.log('Listening to port:  ' + 3000);
})

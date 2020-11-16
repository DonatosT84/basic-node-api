const express = require('express');
const authMiddleware = require("./middlewares/auth")


const app = express();

app.use(authMiddleware);

app.get('/', (req, res) => {
  res.send("Hi there!");
})

// REST VERBS
app.post("/customer", (req, res) => {
  res.send("Hi there!");
})

app.get("/customer/:id", (req, res) => {
  res.send("Hi there!");
})

app.put("/customer/:id", (req, res) => {
  res.send("Hi there!");
})

app.delete("/customer/:id", (req, res) => {
  res.send("Hi there!");
})

app.listen(3000, () => {
  console.log("App is running on port 3000....");
})

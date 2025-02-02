const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});
app.get("/hello", (req, res) => {
  res.send("hello from /hello route :D");
});
app.listen(2000, () => {
  console.log("[!] - Server started at port 2000");
});

const express = require("express");
const path = require("path");
let app = express();

app.get("/", (req, res, next) => {
    res.send("Hello from xthe web server side...");
});

app.get("/", (req, res, next) => {
    console.log(next);
    res.send("helloworld");
});

app.use(express.static(path.join(__dirname, "../public")));

app.use();

// this is how to turn the server on
app.listen(3000);
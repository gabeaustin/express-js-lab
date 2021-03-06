const express = require("express");
const path = require("path");
let app = express();

app.get("/", (req, res, next) => {
    res.send("Hello from the web server side...");
});

app.use(express.static(path.join(__dirname, "../public")));

// this is how to turn the server on
app.listen(3000);
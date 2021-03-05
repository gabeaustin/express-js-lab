const express = require("express");
let app = express();

app.get("/", (req, res, next) => {
    res.send("Hello from the web server side...");
});

// this is how to turn the server on
app.listen(3000);
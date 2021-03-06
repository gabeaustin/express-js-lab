const express = require("express");
const path = require("path");
let app = express();

// Number 5 
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

// Number 3 
app.get("/", (req, res, next) => {
    res.send("Hello from the web server side...");
});

// Number 5
app.use(express.static(path.join(__dirname, "../public")));

// Number 4
/* this is how to turn the server on */
app.listen(3000);
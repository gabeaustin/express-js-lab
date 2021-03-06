const express = require("express");
const path = require("path");
let app = express();

app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

app.get("/", (req, res, next) => {
    res.send("Hello from xthe web server side...");
});

app.get("/", (req, res, next) => {
    console.log(next);
    res.send("helloworld");
});

app.use(express.static(path.join(__dirname, "../public")));

// app.use('/user/:id', function (req, res, next) {
//     console.log('Request URL:', req.originalUrl)
//     next();
// });


// this is how to turn the server on
app.listen(3000);
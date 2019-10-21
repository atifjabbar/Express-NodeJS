var express = require("express");
var expressApp = express();

expressApp.get("/",(req, res, next) => {
    console.log("request hit")
    res.send("response from Hello World Server")
});

expressApp.get("/home",(req, res, next) => {
    console.log("home hit")
    res.send('home of Hello World Server')
});

expressApp.listen(3000, () => {
    console.log("server is listening on port 3000 ")
});
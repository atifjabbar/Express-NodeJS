/*var url = require("url");
var parsedURL = url.parse("http://www.example.com/profile?name=barry");

console.log(parsedURL);

console.log(parsedURL.protocol); // "http:"
console.log(parsedURL.host); // "www.example.com"
console.log(parsedURL.query); // "name=barry"
*/



/*
var Mustache = require("mustache");
var result = Mustache.render("Hi, {{first}} {{last}}!", {
first: "Nicolas",
last: "Cage"
});
console.log(result);

*/

/////////////////////////////////////////////////////////////////////////////////////////////

//// Module banana 
// calling myModule develop by own
/*
var randomInt = require("./myModule");

console.log(randomInt()); // 12
console.log(randomInt()); // 12
console.log(randomInt()); // 12
*/

/*
var fs = require("fs");
var options = { encoding: "utf-8" };
fs.readFile("mufile.txt", options, function(err, data) { //callback function // enonomoufunction (function(err, data))
if (err) {
console.error("Error reading file!");
return;
}
console.log(data);
});

console.log("Heloo World"); // print 1st because previous code take time to read file from disk

*/

var http = require("http");

function requestHandler(request, response) {

    console.log("In comes a request to: " + request.url);

    if(request.url =="/"){
        response.end("Hello, world!");
    }else if(request.url =="/profile"){
        response.end("Profilr Hello, world!");
    }else {
        response.end("404");
    }


}

var server = http.createServer(requestHandler);

server.listen(3000);










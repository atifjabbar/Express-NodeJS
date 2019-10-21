// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser());
// var port = process.env.PORT || 8080;
// var router = express.Router();
// router.param('value', function (req, res, next, param1) {
//     req.data1 = param1;
//     next();
// });
// router.get('/hello/:value', (req, res) => {
//     res.send('Hello ' + req.data1 + '!');
// });
// app.use('/', router);
// app.listen(port);


// function myFunc(data, callback) {
//     if (data === 'foo') callback(true);
//     else callback(false);
// }

// myFunc('bar', function (result) {
//     // do something with the result
// });

// var express = require('express');
// var app = express();
// var router = app.route('/login')
//     .use((req, res, next) => {
//         console.log(req.method, req.url);
//         next();
//     })
//     .get((req, res) => {
//         res.send('You are on the login page');
//     })
//     .post((req, res) => {
//         res.send('You have posted the login data');
//     });
// app.listen(8080);


// var express = require('express');
// var app = express();
// var router = app.route('/login')
//     .all((req, res, next) => {
//         console.log(req.method, req.url);
//         next();
//     })
//     .get((req, res) => {
//         res.send('You are on the login page');
//     })
//     .post((req, res) => {
//         res.send('You have posted the login data');
//     });
// app.listen(8080);

// var express = require("express");
// var app = express();
// console.log(app.get('env'));

// var express = require("express");
// var app = express();
// app.use(express.static(__dirname));
// app.get("/", (req, res, next) => {
//     res.end("World")
// })
// app.listen(3000);


// var express = require("express");
// var app = express();
// app.get(/.+app?le$/, (req, res, next) => {
//     if (req.params)
//         res.end("path1");
//     else
//         res.end('path2');
// });
// app.get(/.+app?les$/, (req, res, next) => {
//     if (req.params[0])
//         res.end("path3");
//     else
//         res.end('path4');
// });
// app.listen(3000);

// var express = require("express");
// var app = express();
// app.use((req, res, next) => {
//     res.write("1");
//     next(new Error("Something bad happened!"));
// });
// app.use((req, res, next) => {
//     res.write("2");
//     next();
// });
// app.use((req, res, next) => {
//     res.write("3");
//     next();
// });
// app.use((err, req, res, next) => {
//     res.write("4");
//     res.end();
// });
// app.listen(3000, () => {
//     console.log("Express app started on port 3000.");
// });

// var express = require("express");
// var app = express();
// app.use((req, res, next) => {
//     res.write("1");
//     next();
// });
// app.use((req, res, next) => {
//     res.write("2");
//     next();
// });
// app.use((err, req, res, next) => {
//     res.write("3");
//     next();
// });
// app.use((req, res, next) => {
//     res.write("4");
//     res.end();
// });
// app.listen(3000, () => {
//     console.log("Express app started on port 3000.");
// });


// var express = require("express");
// var app = express();
// app.get("/users/:userid", (req, res) => {
//     var userId = parseInt(req.params.userid, 10);
//     var q = req.query.q;
//     res.write(req.params.userid);
//     res.write(q);
//     res.end();
// });
// app.listen(3000, () => {
//     console.log("Express app started on port 3000.");
// });


var express = require("express");
var app = express();
app.use("/", (req, res, next) => {
    res.write('1');
    next();
});
app.get("/zia", (req, res, next) => {
    res.write('2');
    next();
});
app.use("zia/", (req, res, next) => {
    res.write('3');
    res.end();
});
app.listen(3000, () => {
    console.log("Express app started on port 3000.");
});


// var express = require("express");
// var app = express();
// app.get("/result/:a/:b", (req, res, next) => {
//     var a = parseInt(req.params.a);
//     var b = parseInt(req.params.b);
//     if (isNaN(a) || isNaN(b)) {
//         res.status(400);
//         res.json({ error: "Bad request." });
//         return;
//     }
//     var result = a + b + b;
//     res.json({ result: result });
// });
// app.listen(3000, () => {
//     console.log("Express app started on port 3000.");
// });

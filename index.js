// console.log("Hello world");

//  var os = require("os");

//  var message = "The platform is ";

// function main(){
//     console.log(message + os.platform());
// }

// main();

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//     res.send("Hell world");
// });

// app.listen(3000, function(){
//     console.log("Example is running on port 3000")
// });

// var express = require("express");
// var app = express();


// app.get("/", function(req, res){
//     res.send("<h1>Hello world</h1>");

// });

// app.get("/name/:name", function(req,res){
//     var n = req.params.name;
//     res.send("<h1> Hello " + n + "</h1>");
// })

// app.get("/:name/:surname",function(req, res){
//     var name = req.params.name;
//     var surname = req.params.surname;
//     res.send("<h1> Hello " + name + " " + surname + "</h1>");
// });

// app.get("/google", function(req,res){
//     res.redirect("https://www.google.com/");
// });

// app.get("/google/:search", function(req,res){
//     var x = req.params.search;
//     req.redirect("google.com/search?q=" + s)

// });

// app.get("/*", function(req, res){
//     res.status(404).send("Sorry we cannot find it")
// });

// app.listen(3000, function(){
//     console.log("Example is running on port 3000")
// });

// var express = require("express");
// var app = express();

// var Square = require("./module")
// var MySquareObject = new Square(5);

// function main() {
//     console.log(MySquareObject.getArea());
// }

// main();
// // app.use(express.static("public"));

// app.get("/", function (req, res) {
//     res.send("Hello");
// });

// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });


// var fs  = require("fs");

// function main(){
//     fs.writeFile("hello.txt", "hello world\n", function(err){
//         console.log("fs.writefile ended");
//     });

//     console.log("fs.writefile")
// }
// main();


// var fs = require('fs');

// function main() {
//    fs.writeFileSync("hello.txt", "Hello world\n");
//    console.log("fs.writeFile");
// }
// main();

// var fs = require("fs");
// var dummyText = "Apple yep";

// function main(){
//     fs.writeFileSync("dummytext.txt", dummyText);
//     var text = fs.readFileSync("dummyText.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt", 
//         text.replace("Apple", "Microsoft")
//     );
// }

// main();

var fs = require("fs");

var obj = 
{

    "first name" : "Vardan",
    "last name": "hovsepyan",
    "age": 13,
    "tumo.student": true

}

var json = JSON.stringify(obj);
fs.writeFileSync("obj.json", json);

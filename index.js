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

var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
      
});

app.get("/name/:name", function(req,res){
    var n = req.params.name;
    res.send("<h1> Hello " + n + "</h1>");
})

app.get("/:name/:surname",function(req, res){
    var name = req.params.name;
    var surname = req.params.surname;
    res.send("<h1> Hello " + name + " " + surname + "</h1>");
});

app.get("/google", function(req,res){
    res.redirect("https://www.google.com/");
});

app.get("/google/:search", function(req,res){
    var x = req.params.search;
    req.redirect("google.com/search?q=" + s)

});

app.listen(3000, function(){
    console.log("Example is running on port 3000")
});

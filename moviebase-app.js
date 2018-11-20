// The app requires the following:
const lists = require('./moviedata/data'); //The data folder.
const express = require('express'); //Express.
const bodyParser = require('body-parser'); //Parses incoming bodies.
const { JSDOM } = require('jsdom'); //DocumentObjectModel
const fs = require("fs"); //File System

const app = express(); //You'll be calling your app quite a bit! Have fun! (not)

//Summon the HTML page.
app.get("/", function (req, res) {
    let doc = fs.readFileSync("html/index.html", "utf-8");
    let dom = new JSDOM(doc);
    let $ = require("jquery")(dom.window); //JQuery
    
    res.send(dom.serialize());
});

//404 Error
app.use(function (req, res, next) {
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>There are no movies to speak of here...</p></body></html>");
});

//Summon the server!
let port = 8000;
app.listen(port, function () {
    console.log('MovieBase listening on port ' + port + '!');
});
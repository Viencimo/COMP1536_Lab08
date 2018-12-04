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

app.use('/js', express.static('js'));
app.use('/html', express.static('html'));


//Get the list. Checks what type the list is based on what's calling it.
app.get('/ajax-GET-list', function (req, res) {

    let responseFormat = req.query['format']; //Takes the format of what's calling it.
    let dataList = null;
    let listNum = req.query['listNum'];
    let listNum2 = req.query['listNum2'];
    console.log("responseFormat: ", responseFormat);
    //Check datatype.
    if (responseFormat == 'html-list') {
        console.log("HTML LIST");
        res.setHeader('Content-Type', 'text/html'); //Headers are mysterious. Query about this?
        if (listNum == 1) {
          dataList = lists.getHTML(); //Reference data.js.
        } else if (listNum == 2) {
          dataList = lists.getHTML2();
        }
        res.send(dataList); //Looks kinda like a return function.
    } else if (responseFormat == 'json-list') {
        console.log("JSON LIST");
        res.setHeader('Content-Type', 'application/json');
        if (listNum2  == 1) {
          dataList = lists.getJSON(); //Reference data.js.
        } else if (listNum2 == 2) {
          dataList = lists.getJSON2(); //Reference data.js.
        }

        res.send(dataList); //Return what's in dataList.
    } else {
        res.send({msg: 'Wrong format!'}); //Return the system being angry.
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//404 Error
app.use(function (req, res, next) {
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>There are no movies to speak of here...</p></body></html>");
});

//Summon the server!
let port = 8000;
app.listen(port, function () {
    console.log('MovieBase listening on port ' + port + '!');
});

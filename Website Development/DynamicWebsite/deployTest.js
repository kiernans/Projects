// deployTest.js
const express = require('express');
const app = express();
app.use(express.static('public')); //show public folder to express for css file
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

let host = '127.0.0.2';
let port = '3001';
let count = 0; // Visit count
let startDate = new Date(); // Server start Date time
let curDate = new Date();
let myName = "Kiernan Soriano";
let netId = "ue5795";
let info = {host: host, port: port, 
            curDate: curDate, startDate: startDate}

app.get('/', function (req, res) {
    count++;
    let updatedInfo = {name: myName, count: count, netId: netId}; //needed to get the count updated each refresh
    res.render('index.njk', updatedInfo);
});

app.get('/uptime', function(req, res){
    res.render('uptime.njk', info);
    });

app.listen(port, host, function () {
console.log(`deployTest.js app listening on IPv4: ${host}:${port}`);
});
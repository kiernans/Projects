const fs = require('fs');
const matter = require('gray-matter'); 
const nunjucks = require('nunjucks');
// Tells nunjucks where to look for templates and set any options
nunjucks.configure('views', { autoescape: true });
let events = require('./eventsFile.json');

let filesInfo = require('./renderList.json'); // Turns into JS array/object
let srcPrefix = __dirname + "/src";
let bldPrefix = __dirname + "/build";
let allFiles = fs.readdirSync(srcPrefix);

console.log("Processing the src directory: ");
allFiles.forEach(function(srcName) {
    console.log('Reading ' + srcName);
    let fname = srcPrefix + '/' + srcName; // full name of the file to be read
    let fdata = fs.readFileSync(fname, 'utf8');

    let lines = fdata.split("\n");
    
    let metaAndContent = matter(fdata); // gives and object with content and data components
    
    let commonmark = require('commonmark');
    let reader = new commonmark.Parser();
    let writer = new commonmark.HtmlRenderer();
    let parsed = reader.parse(metaAndContent.content); // your markdown data in here
    let result = writer.render(parsed);

    // create the full name of the file to be written change extension to .html
    let outName = (bldPrefix + '/' + srcName).replace(".md", ".html");

    let htmlContent = result;
    let tempData = {mainContent: htmlContent};
    let outString = nunjucks.render('base.njk', tempData);
    fs.writeFileSync(outName, outString);
});
import "../../node_modules/markdown/";

var markdown = require("markdown").markdown;
var mdContent = document.getElementById("contentfulContent");

var contentfulContent = markdown.toHTML(mdContent.innerHTML)
console.log(mdContent)
console.log(contentfulContent)
mdContent.innerHTML = contentfulContent


//make a for loop
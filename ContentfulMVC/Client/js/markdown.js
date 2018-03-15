import "../../node_modules/markdown/";

var markdown = require("markdown").markdown;
var mdContent = document.getElementById("contentfulContent");
if (mdContent != null) {
    var contentfulContent = markdown.toHTML(mdContent.innerHTML)
    mdContent.innerHTML = contentfulContent
}



//make a for loop
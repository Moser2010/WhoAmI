import "../../node_modules/markdown/";

var markdown = require("markdown").markdown;
var mdContent = document.getElementsByClassName("contentfulContent");

for (let i = 0; i < mdContent.length; i++) {
    if (mdContent[i] != null) {
        var contentfulContent = markdown.toHTML(mdContent[i].innerHTML)
        mdContent[i].innerHTML = contentfulContent
    }
}




//make a for loop
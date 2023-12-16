//make a function that reszizes .jpeg depending on the size of the screen
function resize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var img = document.getElementById("image");
    if (width > height) {
        img.style.width = "50%";
        img.style.height = "auto";
    } else {
        img.style.width = "auto";
        img.style.height = "50%";
    }
}
//express server on port 3000
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
var readmore_content = document.getElementsByClassName("readmore-content");
var readmore_button = document.getElementById("readmore-button");

var readmore = false;
function readmore_click() {
    readmore = !readmore;
    for (const content of readmore_content) {
        if (readmore) {
            readmore_button.innerText = "Read less"
            content.classList.add("visiable");
        } else {
            readmore_button.innerText = "Read more"
            content.classList.remove("visiable");
        }
    }
}
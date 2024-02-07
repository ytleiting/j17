var map_text = document.getElementsByClassName("map-text");
var info_content = document.getElementsByClassName("info-content");
var info_content_default = document.getElementById("info-content-default")
function map_text_click(me_index) {
    info_content_default.style.display = "none";
    for (let i = 0; i < 5; i++) {
        console.log(me_index + " " + i)
        if (i == me_index) {
            map_text[i].classList.add("selected");
            info_content[i].classList.add("selected");
        } else {
            map_text[i].classList.remove("selected");
            info_content[i].classList.remove("selected");
        }
    }
}
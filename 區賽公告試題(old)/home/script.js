var image_box_content = document.getElementsByClassName("image-box-content")

function switchImage(next) {
    var showNext = false;
    for (const content of image_box_content) {
        if (showNext) {
            content.classList.add("showing");
            showNext = false;
            break;
        }
        if (content.classList.contains("showing")) {
            content.classList.remove("showing");
            showNext = true;
        }
    }
    if (showNext) {
        image_box_content[0].classList.add("showing");
    }
}
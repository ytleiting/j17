var images = Array.from(document.getElementById("images").children).filter(ele => ele.tagName == "IMG");

function image(reverse) {
    let x = false;
    (reverse ? images : images.concat().reverse()).forEach(ele => {
        if (x) {
            ele.classList.add("display");
            x = false;
            return;
        }
        if (ele.classList.contains("display")) {
            ele.classList.remove("display");
            x = true;
        }
    })
    if (x) {
        images[reverse ? 0 : images.length - 1].classList.add("display");
    }
}
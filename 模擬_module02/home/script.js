
let slideIndex = 0;

function showImage(n) {
    var x = document.getElementsByClassName("slide-content");

    x[slideIndex].setAttribute("style", "display:none");
    slideIndex += n;

    if (slideIndex >= x.length) {
        slideIndex = x.length - 1;
    }

    if (slideIndex < 0) {
        slideIndex = 0;
    }

    x[slideIndex].setAttribute("style", "display:flex");
}
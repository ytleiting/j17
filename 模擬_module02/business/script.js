var isOpen = false;

var readmore_ele = document.getElementsByClassName("readmore_ele");
var readmoreBtn = document.getElementById("readmoreBtn");

readmoreBtn.onclick = function () {
    isOpen = !isOpen;

    if (isOpen) {
        readmoreBtn.innerText = "Read less"
        readmore_ele[0].style.display = "block";
        readmore_ele[1].style.display = "block";
    } else {
        readmoreBtn.innerText  = "Read more"
        readmore_ele[0].style.display = "none";
        readmore_ele[1].style.display = "none";
    }
}
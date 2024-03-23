var readmore_elements = Array.from(document.getElementsByClassName("readmore"));
var readmoreBtn = document.getElementById("readmoreBtn");
function readmore() {
    Array.from(document.getElementsByClassName("default")).forEach(ele => ele.classList.remove("default"));
    readmore_elements.forEach(ele => ele.classList.contains("display") ? ele.classList.remove("display") : ele.classList.add("display"));
    readmoreBtn.innerText = readmoreBtn.innerText == "Read more" ? "Read less" : "Read more";
}
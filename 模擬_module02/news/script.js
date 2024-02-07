var info_h1 = Array.from(document.getElementById("info").children).filter(e => e.tagName == "H1");
var info_p = Array.from(document.getElementById("info").children).filter(e => e.tagName == "P");
var info_img = Array.from(document.getElementById("info").children).filter(e => e.tagName == "IMG");
var info_all = [info_h1, info_p, info_img];

function info(index) {
    info_all.forEach(array => array.forEach((e, i) => {
        if (index == i) {
            e.classList.add("display");
        }
        else {
            e.classList.remove("display")
        };
    }));
}
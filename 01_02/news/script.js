var right_elements = Array.from(document.getElementById("right").children);

function mapClicked(index) {
    right_elements.find(ele => ele.classList.contains("display"))?.classList.remove("display");
    right_elements[index].classList.add("display");
}
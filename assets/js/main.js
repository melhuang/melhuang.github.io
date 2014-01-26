console.log("hello");
window.onload = resizePaw;
function resizePaw() {
    var container = document.getElementById("blueprint");
    var parent = container.clientHeight;
    console.log("hi");
    console.log(container);
    var child = document.getElementById("paw");
    child.style.clip = "rect(0px 1000px " + parent + "px 0px)";
}

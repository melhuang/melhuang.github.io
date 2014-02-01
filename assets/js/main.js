window.onload = resizePaw;
window.onresize = resizePaw;
function resizePaw() {
    var container = document.getElementById("blueprint");
    var parent = container.clientHeight;
    var child = document.getElementById("paw");
    child.style.clip = "rect(0px 1000px " + (parent - 5) + "px 0px)";
}

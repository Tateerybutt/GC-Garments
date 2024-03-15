window.onscroll = function () { stick() };

var navbar = document.getElementById("navbar");
var header = document.getElementById("header");
header.innerHTML = '<h1>' + document.title + '</h1>'
var sticky = navbar.offsetTop;

function stick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
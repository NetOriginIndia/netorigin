const a = window.location.pathname
const b = a.split("/").pop();

if (b === "index.html") {
    document.querySelector(".na-links-1").classList.add("active")
}
if (b === "services.html") {
    document.querySelector(".na-links-2").classList.add("active")
}
if (b === "contact.html") {
    document.querySelector(".contact").classList.add("con-btn")
}



function show() {
    var side = document.querySelector(".side-nav")
    side.style.left = "0"
}
function closenav() {
    var side = document.querySelector(".side-nav")
    side.style.left = "-300px"
}
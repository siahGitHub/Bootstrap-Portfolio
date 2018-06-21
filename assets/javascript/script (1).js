/* Function to hide portfolio and contact page on page load */
function myFunction1() {
    var x = document.getElementById("port");
     x.style.display = "none";
     var x = document.getElementById("contact");
     x.style.display = "none";
}
/*Function to show about page and hide others */
function aboutFunction() {
    var x = document.getElementById("abt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } /*else {
        x.style.display = "none";
    }*/
    var x = document.getElementById("port");
    x.style.display = "none";
    var x = document.getElementById("contact");
    x.style.display = "none";
}
/*Function to show portfolio page and hide others */
function portFunction() {
    var x = document.getElementById("port");
    if (x.style.display === "none") {
        x.style.display = "block";
    } /*else {
        x.style.display = "none";
    }*/
    var x = document.getElementById("abt");
    x.style.display = "none";
    var x = document.getElementById("contact");
    x.style.display = "none";
}
/*Function to show contact page and hide others */
function contactFunction() {
    var x = document.getElementById("contact");
    if (x.style.display === "none") {
        x.style.display = "block";
    } /*else {
        x.style.display = "none";
    }*/
    var x = document.getElementById("abt");
    x.style.display = "none";
    var x = document.getElementById("port");
    x.style.display = "none";
}
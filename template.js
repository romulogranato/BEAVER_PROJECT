
/*Function to show/hide menu (toggle menu) on small display.*/

var navLinks = document.getElementById("nav-links");

function showMenu(){
    navLinks.style.right = "0"
}

function hideMenu(){
    navLinks.style.right = "-200px"
}
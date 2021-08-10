var mybutton = document.getElementById("toTop");
document.getElementById("toTop").style.display = "none";

// FUNZIONE ALLO SCROLL ESCE IL BOTTONE
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    document.getElementById("toTop").style.display = "block";
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// TOP DOCUMENTO
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
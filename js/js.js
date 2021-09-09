// Obtener el botón.
var mybutton = document.getElementById("scrolltotop");

// Cuando el usuario se desplace 20px hacia abajo desde la parte superior del documento, muestre el botón.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando el usuario haga clic en el botón, desplácese hasta la parte superior del documento.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
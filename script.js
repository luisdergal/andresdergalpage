var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
 let id = check.checked;asdasdas
  if (id==true) {
    location.href="es/index.html";
  }else {
    location.href="../index.html";
  }
}
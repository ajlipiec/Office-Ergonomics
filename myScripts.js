

// navigator script ---- Start
  function myFunction() {
    var x = document.getElementById("my-main-nav");
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "main-nav"
    }
  }
// navigator script ---- Start

// Accordian Script ---- Start
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i <acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle(" active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else{
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// Accordian Script ---- End


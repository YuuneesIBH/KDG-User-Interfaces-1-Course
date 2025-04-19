//wachten tot page geladen is
document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("ontdek_aanbod");
  //op event doorverwijzen naar productspage
  button.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = 'html/productspage.html';
  });
});
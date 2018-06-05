$(document).ready(function(){
    $('#modal-btn').click(function() {
        $('#modal').fadeIn(500);
        $('.modal-content').animate({width: '80%', padding:'20px', overflow:'visible'}, 1000)
    });
    $('#span-close-modal, #btn-close-modal').click(function() {
        $('#modal').fadeOut(1200);
        $('.modal-content').animate({width: '0', padding:'0', overflow:'hidden'},1000)
    });
  });


  (function() {
    "use strict";
    window.addEventListener("load", function() {
      var form = document.querySelector("#contact_form");
      form.addEventListener("submit", function(event) {
          if (form.checkValidity() == false) {
          event.preventDefault();
          event.stopPropagation();
          }
          form.classList.add("was-validated");
          $('html, body').animate({
            scrollTop: $("#contact_form").offset().top
          }, 800, function(){
            window.location.hash = "#contact_form";
          });
        }, false);
      }, false);
  }());

  function myFunction() {
    document.querySelector("#mx").classList.toggle("hidden");
    document.querySelector("#bars").classList.toggle("hidden");
        
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
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
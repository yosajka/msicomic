(function($){
// Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  $(".btm").click(function(){
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
  });

  var modal = document.getElementById('id01');
  var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    else if(event.target == modal2){
      modal2.style.display = "none";
    }   
  }
  
  function checklogo(){
    var check = document.log.logohome.value;
    var exit = false;
    if(validform(valid == true) == check){
      exit = true;
      window.location = "HomeAfter.html"
      break;
    }
    else{
      window.location = "Home.html"
    }
  }

})(jQuery);



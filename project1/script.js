$(document).ready(function(){
    $(window).scroll(function () {
       $('.triangle').fadeIn();
        if($(this).scrollTop()==0){
         $('.triangle').fadeOut();
        }
    });
});

var coral1 = document.querySelector("coral1");
var coral2 = document.querySelector("coral2");
var coral3 = document.querySelector("coral3");
var coral4 = document.querySelector("coral4");
var coral5 = document.querySelector("coral5");
var coral_wrap = document.querySelector("coral-wrap");
var coral_leaf = document.querySelector("coral-leaf");
var coral_leaf2 = document.querySelector("coral-leaf2");
var coral_leaf3 = document.querySelector("coral-leaf3");
var coral_leaf4 = document.querySelector("coral-leaf4");
var coral_leaf5 = document.querySelector("coral-leaf5");
var rock = document.querySelector("rock");
var rock2 = document.querySelector("rock2");
var bubble = document.querySelector("bubble");
var bubbles2 = document.querySelector("bubbles2");
var fish = document.querySelector("fish");
var fish2 = document.querySelector("fish2");
var star = document.querySelector("star");
var star2 = document.querySelector("star2");

// object.addEventListener("scroll", function() {

// });

$(window).scroll(function(){
    if($(document).scrollTop() > 1200){
      $('#coral1').hide();
    }
  });

 $(window).scroll(function(){
    if($(document).scrollTop() < 1200){
      $('#coral1').show();
    }
  });
// 
$(window).scroll(function(){
    if($(document).scrollTop() > 1400){
      $('#coral2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1400){
      $('#coral2').show();
    }
  });
// 
$(window).scroll(function(){
    if($(document).scrollTop() > 1500){
      $('#coral3').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1500){
      $('#coral3').show();
    }
  });
// 
$(window).scroll(function(){
    if($(document).scrollTop() > 1700){
      $('#coral4').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1700){
      $('#coral4').show();
    }
  });
//

$(window).scroll(function(){
    if($(document).scrollTop() > 1800){
      $('#coral5').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() < 1800){
      $('#coral5').show();
    }
  });
//

$(window).scroll(function(){
    if($(document).scrollTop() > 2100){
      $('#coral-wrap').hide();
    }
  });


$(window).scroll(function(){
    if($(document).scrollTop() > 2200){
      $('#coral-leaf').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 3200){
      $('#coral-leaf2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 2500){
      $('#coral-leaf3').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 2700){
      $('#coral-leaf4').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 2900){
      $('#coral-leaf5').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 2910){
      $('#rock').hide();
    }
  });
  
  $(window).scroll(function(){
    if($(document).scrollTop() > 1560){
      $('#rock2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 3000){
      $('#bubble').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 3100){
      $('#bubbles2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 1950){
      $('#fish').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 2850){
      $('#fish2').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 1780){
      $('#star').hide();
    }
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 2350){
      $('#star2').hide();
    }
  });
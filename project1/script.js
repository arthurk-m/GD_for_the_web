$(document).ready(function(evt){
    $(window).scroll(function () {
       $('.triangle').fadeIn();
        if($(this).scrollTop()==0){
         $('.triangle').fadeOut();
        }
    });
});
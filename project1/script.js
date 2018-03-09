$(document).ready(function(){
    $(window).scroll(function () {
       $('.triangle').fadeIn();
        if($(this).scrollTop()==0){
         $('.triangle').fadeOut();
        }
    });
});
$(document).ready(function() {
    
    $(window).scroll(function () {
        var offset = $('.about').offset().top;
        var wHeight = $(window).height();
        var below = 200; // custom amount between top of object and bottom of viewport that object should animate
        
        /*alert("top: " + $(window).scrollTop() + " offset: " + offset + " wHeight: " + 
wHeight);*/
        
        if($(window).scrollTop() > offset - wHeight + below) {
            $('.about__img').addClass("fadeDown");
        }
        else {
        //element.removeClass("animateMe");
        }
    });
    
    
    
});
var vHeight = $('.about--1').offset().top;
var vWidth = $(window).width();

$(document).ready(function() {
    
    $(window).scroll(function () {
        //var offset = $('.about').offset().top;
        //var wHeight = $(window).height();
        //var below = 200; // custom amount between top of object and bottom of viewport that object should animate
        
        //alert("top: " + $(window).scrollTop() + " offset: " + offset + " wHeight: " + wHeight);
        
        /*if($(window).scrollTop() > offset - wHeight + below) {
            $('.about__img').addClass("fadeDown");
        }
        else {
        //element.removeClass("animateMe");
        }*/
        
//        alert(vWidth);
        
        $(".about-desc--1").css({'opacity': ($(window).scrollTop() - (1/4*vHeight))/(vWidth/2) });
        
        if($(window).scrollTop() > vHeight) {
            $(".e--1").addClass("fix");
        }
        if($(window).scrollTop() > vHeight + 100) {
            // Fade in main nav buttons (bottom of home page)
            $('.main-nav-btn').addClass("fadeUp");
        }
        else {
            //alert($(window).scrollTop());
        }
        
        
    });
    
    
    
});
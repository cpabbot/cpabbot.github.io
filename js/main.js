//var vHeight = $('.about--1').offset().top; update 3.1
var vHeight = $('.home-two').offset().top;
var vWidth = $(window).width();
var b = 1;

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
        
        $(".about-desc--1").css({'opacity': ($(window).scrollTop() - (1/4*vHeight/4))/(vWidth/2) });
        
        if($(window).scrollTop() > vHeight) {
            $(".e--1").addClass("fix");
            $(".about-right").addClass("wipe");
        }
        if($(window).scrollTop() > 3*vHeight/4) { // update 3.1 from vHeight + 100
            // Fade in main nav buttons (bottom of home page)
            $('.main-nav-btn').addClass("fadeUp");
        }
        else {
//            alert($(window).scrollTop());
        }
        
//        if($(window).scrollTop() % 3 == 0) {
//            b = 1.0 - $(window).scrollTop()/vHeight;
//            if(b < 0.4) { b = 0.4 }
//            $(".intro").css("filter", "brightness(" + b + ")");
//        }
        
        
    });
    
    
    
});
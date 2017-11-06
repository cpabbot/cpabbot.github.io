$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('.type-text');
    
    var words = ['Creator', 'Designer', 'Developer', 'Coder', 'Pi Lover', 'Athlete', 'Programmer', 'Mathmetician', 'Innovator', 'Theorist', 'Geocacher'];
    setTimeout(function() { //delay
        loopTE(words, 0);
    }, 4500); // originally 3500
    
    /*$(window).scroll(function() {
        var offset = $('.about').offst().top;
        if($(window).scrollTop() < offset) {
            loopTE(words, 0);
        }
    })*/ //probably not worth it, was going to use to reduce processing, when user scrolls past intro, stop typing animation
    
});

function loopTE(array, index) {
    typeErase(array[index], 2300); // max 2500...
    setTimeout(function() {
        //var offset = $('.about').offset().top;
        //if($(window).scrollTop() < offset) { // scrolled to intro section
            if(index + 1 == array.length) {
                loopTE(array, 0);
            } else {
                loopTE(array, index + 1);
            }
       //}
    }, 3000)
}

function typeErase(word, space) { // space = initial type time before erase
    type(word, 0);
    setTimeout(erase, space, word, word.length);
}

function type(txt, length) {
    captionEl.html(txt.substr(0, length++)); // set text to an increasing part of the final text
    if(length < txt.length+1) {
        setTimeout(type, 50, txt, length); // loop so that more letters are added
    }
}

function erase(txt, length) {
    captionEl.html(txt.substr(0, length--));
    if(length >= 0) {
        setTimeout(erase, 50, txt, length);
    }
}

function cursorAnimation() {
    $('.type-cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
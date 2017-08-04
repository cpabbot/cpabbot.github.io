$(window).scroll(function(){
    
    //DESKTOP ONLY
    if($(window).width() > 850) {
        
        var windowY = $(window).scrollTop();
        var initial = $(window).height() * 0.03;
        var bottom = initial + windowY/3;
        $('.intro__img').css("bottom", -bottom);
        
    }
    
});
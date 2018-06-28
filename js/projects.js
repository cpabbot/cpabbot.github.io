$(document).ready(function() {
    
    $(window).scroll(function () {
        
                
        
    });
    
});

function nextProject() {
    $(".project__img").addClass("exit");
    window.setTimeout(function() {
        $(".project__description").addClass("exit");
    }, 400);
}
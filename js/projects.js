var index = 0;
var numProjects = 8;
var animating = false;

$(document).ready(function() {
    
    $(".js-fade").addClass("fadeUp"); // must be remove right before animation
    
    /*** allows the user to scroll through projects ***/
    $('.project').bind('mousewheel', function(e) {
        if(!animating) {
            if(e.originalEvent.wheelDelta / 120 > 0) {
            //alert('up');
            previousProject();
        } else {
            //alert('down');
            nextProject();
        }
        }
    });
    
    /*** controls the cool underline effect for the project title ***/
    $( ".project__title" ).mousemove(function( event ) {
        var x = (event.pageX - $('.project__title').offset().left) / $(".project__title").width() * 100;
        var fraction = (1-(x/100))*100;
//        console.log("Handler for .mousemove() called at " + event.pageX + ", " + event.pageY);
        // 180% is left, 0% is right
        $( ".project__title").css("background-position", fraction + "% 88%");
    });
    $( ".project__title" ).mouseleave(function() {
        $( ".project__title").css("background-position", "0 88%");
    });
    
//    $(".project__img").click(function() {
////        $(".project:not(.project__img)").css("filter", "brightness(0.1)");
//        $(".overlay").removeClass("hide");
//        $(".project__img").addClass("unfilter");
//    });
//    
//    $(".overlay").click(function() {
//        $(".overlay").addClass("hide");
//        $(".project__img").removeClass("unfilter");
//    });
    
});

function nextProject() {
    if(index == 0) {
        $(".js-fade").removeClass("fadeUp");
    }
    if(index < (2*numProjects-2)) { // must be less than (2 * #projects - 2)
        prepNextProject();
        animating = true;
        hideToLeft();
        index += 2;
        window.setTimeout(function() {
            showFromRight();
            animating = false;
        }, 500);
    }
}

function previousProject() {
    if(index > 0) {
        animating = true;
        hideToRight();
        index -= 2;
        window.setTimeout(function() {
            hideOldProject()
            showFromLeft();
            animating = false;
        }, 500);
    }
}

function hideToLeft() {
//    var e1 = document.getElementsByClassName("js-proj")[index]; // image
//    var e2 = document.getElementsByClassName("js-proj")[index + 1]; // description
    $e1 = $(".js-proj:eq(" + index + ")");
    $e2 = $(".js-proj:eq(" + (index+1) + ")");
    $e1.addClass("exit");
    window.setTimeout(function() {
        $e2.addClass("exit");
    }, 0);
}

function hideToRight() {
    $e1 = $(".js-proj:eq(" + index + ")");
    $e2 = $(".js-proj:eq(" + (index+1) + ")");
    $e1.addClass("enter");
    window.setTimeout(function() {
        $e2.addClass("enter");
    }, 0);
}

function showFromLeft() {
    $e1 = $(".js-proj:eq(" + index + ")");
    $e2 = $(".js-proj:eq(" + (index+1) + ")");
    $e1.removeClass("exit");
    window.setTimeout(function() {
        $e2.removeClass("exit");
    }, 0);
}

function showFromRight() {
    $e1 = $(".js-proj:eq(" + index + ")");
    $e2 = $(".js-proj:eq(" + (index+1) + ")");
    $e1.removeClass("enter");
    window.setTimeout(function() {
        $e2.removeClass("enter");
    }, 0);
}

function prepNextProject() {
    $e3 = $(".js-proj:eq(" + index+2 + ")");
    $e4 = $(".js-proj:eq(" + (index+3) + ")");
    $e3.removeClass("hide");
    $e4.removeClass("hide");
}

function hideOldProject() {
    $e3 = $(".js-proj:eq(" + index+2 + ")");
    $e4 = $(".js-proj:eq(" + (index+3) + ")");
    $e3.addClass("hide");
    $e4.addClass("hide");
}
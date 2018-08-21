$(document).ready(function() {
    
    var url = "";
    
    // OPEN WINDOW
    $('.card__title').click(function() {
        $('.blur-background').removeClass('hide');
        $('.window').removeClass('hide');
        
        url = $(this).attr('id');
        $('.window__frame').attr('src', url + ".html")
    });
    
    // CLOSE WINDOW
    $('.blur-background').click(closeWindow);
    
});

function closeWindow() {
    $('.window').addClass('hide');
    $('.blur-background').addClass('hide');
}
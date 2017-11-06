$(document).ready(function() {
    
    var pathEls = document.querySelectorAll('path');
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute('stroke-dashoffset', offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 1500,
        delay: 1800, //1500
        easing: 'easeInOutSine',
        autoplay: true
      });
    }

    
});
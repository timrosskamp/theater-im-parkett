(function () {
    'use strict';

    var TL = anime.timeline({
        easing: 'easeInOutSine',
        loop: true,
        autoplay: false
    });

    setTimeout(function () {
        return TL.play();
    }, 700);

    TL.add({
        targets: '.js-animation .js-progress',
        width: ['0%', '100%'],
        duration: 5000
    });

}());

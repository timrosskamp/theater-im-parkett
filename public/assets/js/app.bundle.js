(function () {
    'use strict';

    $('.js-navToggle').on('click', function () {
        $('body').toggleClass('-navOpen');
    });

    $('.js-navClose').on('click', function () {
        $('body').removeClass('-navOpen');
    });

    // import "animation";

    baguetteBox.run('.gallery');

}());

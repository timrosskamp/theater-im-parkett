(function () {
    'use strict';

    var $animation = $('.js-animation');
    var $progress = $animation.find('.js-progress');
    var $frame1 = $animation.find('#frame-1');
    var $frame2 = $animation.find('#frame-2');
    var $frame3 = $animation.find('#frame-3');
    var $frame4 = $animation.find('#frame-4');

    var TL = new TimelineLite({
        onComplete: function onComplete() {
            // Reset Frames
            $frame2.css('opacity', 0);
            $frame3.css('opacity', 0);

            TweenLite.fromTo($frame4, 1, {
                opacity: 1
            }, {
                opacity: 0
            });

            // Restart Timeline
            this.restart();
        }
    });

    // Frame 1
    TL.add([TweenLite.fromTo($progress, 4, {
        width: "0%"
    }, {
        width: "100%",
        ease: Power1.easeInOut
    }), TweenLite.to($frame1.find('.js-img'), 5, {
        scale: 1.1,
        ease: Power0.easeNone
    }), TweenLite.from($frame1.find('.js-content'), 2, {
        opacity: 0,
        scale: 0.5,
        yPercent: 20
    })]);

    // Frame 2
    TL.add([TweenLite.fromTo($progress, 4, {
        width: "0%"
    }, {
        width: "100%",
        ease: Power1.easeInOut
    }), TweenLite.to($frame2, 1, {
        opacity: 1
    }), TweenLite.from($frame2.find('.js-img'), 5, {
        scale: 1.05,
        xPercent: 3,
        ease: Power0.easeNone
    }), TweenLite.from($frame2.find('.js-content'), 2, {
        opacity: 0,
        scale: 0.5,
        yPercent: 20
    })], "-=1");

    // Frame 3
    TL.add([TweenLite.fromTo($progress, 4, {
        width: "0%"
    }, {
        width: "100%",
        ease: Power1.easeInOut
    }), TweenLite.to($frame3, 1, {
        opacity: 1
    }), TweenLite.fromTo($frame3.find('.js-img'), 5, {
        scale: 1.1
    }, {
        scale: 1,
        xPercent: -2,
        ease: Power0.easeNone
    })], "-=1");

    // Frame 4
    TL.add([TweenLite.fromTo($progress, 8, {
        width: "0%"
    }, {
        width: "100%",
        ease: Power1.easeInOut
    }), TweenLite.to($frame4, 1, {
        opacity: 1
    }), TweenLite.from($frame4.find('.js-img'), 8, {
        scale: 1.2,
        ease: Power0.easeNone
    })], "-=1");

    $('.js-navToggle').on('click', function () {
        $('body').toggleClass('-navOpen');
    });

    $('.js-navClose').on('click', function () {
        $('body').removeClass('-navOpen');
    });

}());

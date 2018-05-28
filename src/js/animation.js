const $animation = $('.js-animation');
const $progress = $animation.find('.js-progress');
const $frame1 = $animation.find('#frame-1');
const $frame2 = $animation.find('#frame-2');
const $frame3 = $animation.find('#frame-3');

const TL = new TimelineLite({
    onComplete: function(){
        // Reset Frames
        $frame2.css('opacity', 0);

        new TweenLite.fromTo($frame3, 1, {
            opacity: 1
        }, {
            opacity: 0
        });

        // Restart Timeline
        this.restart();
    }
});

TL.add([
    TweenLite.fromTo($progress, 5, {
        width: "0%"
    }, {
        width: "100%"
    }),
    TweenLite.to($frame1.find('.js-img'), 5, {
        scale: 1.2
    }),
    TweenLite.from($frame1.find('.js-content'), 2, {
        opacity: 0,
        scale: 0.5,
        yPercent: 20
    })
]);

TL.add([
    TweenLite.fromTo($progress, 5, {
        width: "0%"
    }, {
        width: "100%"
    }),
    TweenLite.to($frame2, 1, {
        opacity: 1
    }),
    TweenLite.from($frame2.find('.js-img'), 5, {
        scale: 1.2,
        xPercent: 8
    }),
    TweenLite.from($frame2.find('.js-content'), 2, {
        opacity: 0,
        scale: 0.5,
        yPercent: 20
    })
]);

TL.add([
    TweenLite.fromTo($progress, 5, {
        width: "0%"
    }, {
        width: "100%"
    }),
    TweenLite.to($frame3, 1, {
        opacity: 1
    }),
]);
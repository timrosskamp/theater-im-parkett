(function(){
    function each(arr, cb){
        [].forEach.call(arr, cb);
    }

    each(document.querySelectorAll('.js-navClose'), el =>{
        el.addEventListener('click', e => {
            e.preventDefault();
            document.body.classList.remove('-navOpen');
        });
    });

    each(document.querySelectorAll('.js-navToggle'), el =>{
        el.addEventListener('click', e => {
            e.preventDefault();
            document.body.classList.toggle('-navOpen');
        });
    });
})();

(function(){
    const $animation = document.querySelector('.js-animation');
    if(!$animation) return;

    const $frame1 = $animation.querySelector('#frame-1');
    const $frame2 = $animation.querySelector('#frame-2');
    const $frame3 = $animation.querySelector('#frame-3');
    const $frame4 = $animation.querySelector('#frame-4');
    const $progress = $animation.querySelector('.js-progress');

    const TL = new TimelineLite({
        onComplete: function(){
            // Infinite Loop
            this.restart();

            TweenLite.fromTo($frame4, 1, {
                opacity: 1
            }, {
                opacity: 0
            });
        }
    });

    // FRAME 1
    TL.add([
        TweenLite.fromTo($progress, 4, {
            width: "0%"
        }, {
            width: "100%",
            ease: Power1.easeInOut
        }),
        TweenLite.from($frame1.querySelector('.js-content'), 1.5, {
            scale: 0.5,
            opacity: 0,
            yPercent: 30
        }),
        TweenLite.to($frame1.querySelector('.js-img'), 5, {
            scale: 1.1,
            ease: Power0.easeInOut
        })
    ]);

    // FRAME 2
    TL.add([
        TweenLite.fromTo($frame2, 1, {
            opacity: 0
        }, {
            opacity: 1
        }),
        TweenLite.fromTo($progress, 4, {
            width: "0%"
        }, {
            width: "100%",
            ease: Power1.easeInOut
        }),
        TweenLite.from($frame2.querySelector('.js-content'), 1.5, {
            scale: 0.5,
            opacity: 0,
            yPercent: 30
        }),
        TweenLite.from($frame2.querySelector('.js-img'), 5, {
            scale: 1.2,
            xPercent: 4,
            ease: Power0.easeInOut
        })
    ], "-=1");

    // FRAME 3
    TL.add([
        TweenLite.fromTo($frame3, 1, {
            opacity: 0
        }, {
            opacity: 1
        }),
        TweenLite.fromTo($progress, 4, {
            width: "0%"
        }, {
            width: "100%",
            ease: Power1.easeInOut
        }),
        TweenLite.from($frame3.querySelector('.js-content'), 1.5, {
            scale: 1.3,
            opacity: 0,
            yPercent: 30
        }),
        TweenLite.to($frame3.querySelector('.js-img'), 5, {
            scale: 1.2,
            xPercent: -4,
            ease: Power0.easeInOut
        })
    ], "-=1");

    // FRAME 4
    TL.add([
        TweenLite.fromTo($frame4, 1, {
            opacity: 0
        }, {
            opacity: 1
        }),
        TweenLite.fromTo($progress, 8, {
            width: "0%"
        }, {
            width: "100%",
            ease: Power1.easeInOut
        }),
        TweenLite.from($frame4.querySelector('.js-content'), 2, {
            scale: 0.8,
            opacity: 0
        }),
        TweenLite.from($frame4.querySelector('.js-img'), 8, {
            scale: 1.4,
            ease: Power0.easeInOut
        })
    ], "-=1");

})();

baguetteBox.run('.js-gallery');
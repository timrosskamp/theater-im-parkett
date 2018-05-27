const TL = anime.timeline({
    easing: 'easeInOutSine',
    loop: true,
    autoplay: false
});

setTimeout(() => TL.play(), 700);

TL.add({
    targets: '.js-animation .js-progress',
    width: ['0%', '100%'],
    duration: 5000
});

TL.add({
    targets: '#frame-1 .js-content',
    opacity: [0, 1],
    scale: [0.5, 1],
    offset: "-=5000"
});

TL.add({
    targets: '#frame-1 .js-content line',
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: (el, i) => i * 500,
    offset: "-=5000"
});
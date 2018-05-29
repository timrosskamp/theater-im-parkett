$('.js-navToggle').on('click', () => {
    $('body').toggleClass('-navOpen');
});

$('.js-navClose').on('click', () => {
    $('body').removeClass('-navOpen');
});
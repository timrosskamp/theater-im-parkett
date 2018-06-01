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
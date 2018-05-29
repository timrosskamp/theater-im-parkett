const cleaner = require('clean-html');
const fs = require('fs');

fs.readFile("public/index.html", function(err, data){
    if(err) throw err;

    cleaner.clean(String(data), {
        'add-break-around-tags': [
            'svg', 'text', 'mask', 'li', 'span', 'a', 'line', 'img', 'circle', 'path'
        ],
        'remove-attributes': [],
        'wrap': false
    }, function(html) {
        console.log(html);
    });
});
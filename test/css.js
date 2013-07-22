'use strict';
module.exports = {

    // Testsuite name
    name: 'CSS - DalekJS guinea pig',

    'Can read a css value (OK, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.css('#superColoredElement', 'background-color', 'rgba(255, 0, 0, 1)')
            .assert.css('#superColoredElement', 'color', 'rgba(0, 128, 0, 1)')
            .done();
    }
}
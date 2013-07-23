'use strict';
module.exports = {

    // Testsuite name
    name: 'Click - DalekJS guinea pig',

    'Can click a select option (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.val('#select_elm', 10, 'David is the favourite')
            .click('#select_elm option:last-child')
            .assert.val('#select_elm', 11, 'Matt is now my favourite, bow ties are cool')
            .done();
    }
};
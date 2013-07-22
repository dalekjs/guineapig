'use strict';
module.exports = {

    // Testsuite name
    name: 'Enabled - DalekJS guinea pig',

    'Can assert that input is disabled (OK, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.disabled('#disabled_input')
            .done();
    },

    'Can assert that input is not enabled (OK, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.enabled('#fbemail')
            .done();
    }
};
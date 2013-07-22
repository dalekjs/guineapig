'use strict';
module.exports = {

    // Testsuite name
    name: 'Enabled - DalekJS guinea pig',

    'Can assert that input is disabled (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.disabled('#disabled_input')
            .done();
    },

    'Can assert that input is not enabled (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.enabled('#fbemail')
            .done();
    }
};
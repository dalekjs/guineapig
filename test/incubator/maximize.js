'use strict';
module.exports = {

    // Testsuite name
    name: 'Window maximize (Viewport) - DalekJS guinea pig',

    'Can maximize window (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .resize({width: 320, height: 480})
            .assert.notVisible('#only-visible-above-500px')
            .resize({width: 499, height: 480})
            .assert.notVisible('#only-visible-above-500px')
            .maximize()
            .assert.visible('#only-visible-above-500px')
            .done();
    }
}
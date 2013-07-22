'use strict';
module.exports = {

    // Testsuite name
    name: 'Resize (Viewport) - DalekJS guinea pig',

    'Can resize window (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.visible('#only-visible-above-500px')
            .resize({width: 320, height: 480})
            .assert.notVisible('#only-visible-above-500px')
            .done();
    },

    'Can resize window multiple times (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .resize({width: 1280, height: 1024})
            .assert.visible('#only-visible-above-500px')
            .resize({width: 320, height: 480})
            .assert.notVisible('#only-visible-above-500px')
            .resize({width: 499, height: 480})
            .assert.notVisible('#only-visible-above-500px')
            .resize({width: 1024, height: 786})
            .assert.visible('#only-visible-above-500px')
            .resize({width: 1280, height: 1024})
            .assert.visible('#only-visible-above-500px')
            .done();
    },
}
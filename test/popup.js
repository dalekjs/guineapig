'use strict';
module.exports = {

    // Testsuite name
    name: 'PopUp - DalekJS guinea pig',

    'Can open pop up window (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .click('#open-pop-up')
            .toWindow('pop-up-window')
                .assert.chain()
                    .text('h1', 'IFrame contents')
                    .title('I am a page title - DalekJS')
                .end()
            .toParentWindow()
            .done();
    },

    'Can open pop up window & go back to parent (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .click('#open-pop-up')
            .toWindow('pop-up-window')
                .assert.text('h1', 'IFrame contents')
            .toParentWindow()
            .assert.text('h1', 'This page is a Selenium sandbox')
            .done();
    },
}
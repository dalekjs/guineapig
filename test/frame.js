'use strict';
module.exports = {

    // Testsuite name
    name: 'Frame - DalekJS guinea pig',

    'Can get frame contents (OK, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .toFrame('#a-frame')
            	.assert.chain()
            		.url('https://rawgithub.com/dalekjs/guineapig/master/iframecont.html')
            		.text('h1', 'IFrame contents')
            	.end()
            .toParent()
            .done();
    },

    'Can get frame contents & go back (OK, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .toFrame('#a-frame')
                .assert.chain()
                    .url('https://rawgithub.com/dalekjs/guineapig/master/iframecont.html')
                    .text('h1', 'IFrame contents')
                .end()
            .toParent()
            .assert.url('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .done();
    }

};
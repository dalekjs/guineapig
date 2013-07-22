'use strict';
module.exports = {

    // Testsuite name
    name: 'Frame - DalekJS guinea pig',

    'Can get frame contents (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .toFrame('#a-frame')
            	.assert.chain()
            		.url('http://localhost:5000/iframecont.html')
            		.text('h1', 'IFrame contents')
            	.end()
            .toParent()
            .done();
    },

    'Can get frame contents & go back (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .toFrame('#a-frame')
                .assert.chain()
                    .url('http://localhost:5000/iframecont.html')
                    .text('h1', 'IFrame contents')
                .end()
            .toParent()
            .assert.url('http://localhost:5000/index.html')
            .done();
    }

};
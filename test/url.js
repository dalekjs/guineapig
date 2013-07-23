'use strict';
module.exports = {

    // Testsuite name
    name: 'Url - DalekJS guinea pig',

    'Can get url (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/')
            .done();
    },

    'Can get url (OK, jQuery style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url('http://dalekjs.com/guineapig/', 'Url is correct')
            .done();
    },

    'Can get url (OK, TDD style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url().is('http://dalekjs.com/guineapig/')
            .done();
    },

    'Can get url (OK, TDD style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url().is('http://dalekjs.com/guineapig/', 'Url is correct')
            .done();
    },

    'Can get !url (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.doesntHaveUrl('http://localhost:5000/guinea.html')
            .done();
    },

    'Can get !url (OK, jQuery style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.doesntHaveUrl('http://localhost:5000/guinea.html', 'Url is not whatever')
            .done();
    },

    'Can get !url (OK, TDD style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url().is.not('http://localhost:5000/guinea.html')
            .done();
    },

    'Can get !url (OK, TDD style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.url().is.not('http://localhost:5000/guinea.html', 'Url is not whatever')
            .done();
    },

    'Can get url (OK, jQuery style, no message, chained)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
                .url('http://dalekjs.com/guineapig/')
            .end()
            .done();
    },

    'Can get url (OK, jQuery style, message, chained)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
                .url('http://dalekjs.com/guineapig/', 'Url is correct')
            .end()
            .done();
    },

    'Can get url (OK, TDD style, no message, chained)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
                .url().is('http://dalekjs.com/guineapig/')
            .end()
            .done();
    },

    'Can get url (OK, TDD style, message, chained)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
                .url().is('http://dalekjs.com/guineapig/', 'Url is correct')
            .end()
            .done();
    },

    'Can get !url (OK, jQuery style, no message, chained)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
                .doesntHaveUrl('http://localhost:5000/guinea.html')
            .end()
            .done();
    },

    'Can get !url (OK, jQuery style, message, chained)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
                .doesntHaveUrl('http://localhost:5000/guinea.html', 'Url is not whatever')
            .end()
            .done();
    },

    'Can get !url (OK, TDD style, no message, chained)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
                .url().is.not('http://localhost:5000/guinea.html')
            .end()
            .done();
    },

    'Can get !url (OK, TDD style, message, chained)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
                .url().is.not('http://localhost:5000/guinea.html', 'Url is not whatever')
            .end()
            .done();
    }
};
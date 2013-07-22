'use strict';
module.exports = {

    // Testsuite name
    name: 'Url - DalekJS guinea pig',

    'Can get url (OK, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.url('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .done();
    },

    'Can get url (OK, jQuery style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.url('https://rawgithub.com/dalekjs/guineapig/master/index.html', 'Url is correct')
            .done();
    },

    'Can get url (OK, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.url().is('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .done();
    },

    'Can get url (OK, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.url().is('https://rawgithub.com/dalekjs/guineapig/master/index.html', 'Url is correct')
            .done();
    },

    'Can get !url (OK, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.doesntHaveUrl('http://localhost:5000/guinea.html')
            .done();
    },

    'Can get !url (OK, jQuery style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.doesntHaveUrl('http://localhost:5000/guinea.html', 'Url is not whatever')
            .done();
    },

    'Can get !url (OK, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.url().is.not('http://localhost:5000/guinea.html')
            .done();
    },

    'Can get !url (OK, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.url().is.not('http://localhost:5000/guinea.html', 'Url is not whatever')
            .done();
    },

    'Can get url (OK, jQuery style, no message, chained)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
                .url('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .end()
            .done();
    },

    'Can get url (OK, jQuery style, message, chained)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
                .url('https://rawgithub.com/dalekjs/guineapig/master/index.html', 'Url is correct')
            .end()
            .done();
    },

    'Can get url (OK, TDD style, no message, chained)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
                .url().is('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .end()
            .done();
    },

    'Can get url (OK, TDD style, message, chained)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
                .url().is('https://rawgithub.com/dalekjs/guineapig/master/index.html', 'Url is correct')
            .end()
            .done();
    },

    'Can get !url (OK, jQuery style, no message, chained)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
                .doesntHaveUrl('http://localhost:5000/guinea.html')
            .end()
            .done();
    },

    'Can get !url (OK, jQuery style, message, chained)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
                .doesntHaveUrl('http://localhost:5000/guinea.html', 'Url is not whatever')
            .end()
            .done();
    },

    'Can get !url (OK, TDD style, no message, chained)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
                .url().is.not('http://localhost:5000/guinea.html')
            .end()
            .done();
    },

    'Can get !url (OK, TDD style, message, chained)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
                .url().is.not('http://localhost:5000/guinea.html', 'Url is not whatever')
            .end()
            .done();
    }
};
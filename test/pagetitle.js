'use strict';
module.exports = {

    // Testsuite name
    name: 'Pagetitle - DalekJS guinea pig',

    'Can get pagetitle (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.title('I am a page title - Sauce Labs')
            .done();
    },

    'Can get pagetitle (OK, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.title('I am a page title - Sauce Labs', 'Page title is correct')
            .done();
    },

    'Can get pagetitle (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.title().is('I am a page title - Sauce Labs')
            .done();
    },

    'Can get pagetitle (OK, TDD style, message)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.title().is('I am a page title - Sauce Labs', 'Page title is correct')
            .done();
    },

    'Can get !pagetitle (OK, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.doesntHaveTitle('I am a page title - Browserling')
            .done();
    },

    'Can get !pagetitle (OK, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.doesntHaveTitle('I am a page title - Browserling', 'Title is not whatever')
            .done();
    },

    'Can get !pagetitle (OK, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.title().is.not('I am a page title - Browserling')
            .done();
    },

    'Can get !pagetitle (OK, TDD style, message)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.title().is.not('I am a page title - Browserling', 'Title is not whatever')
            .done();
    },

    'Can get pagetitle (OK, jQuery style, no message, chained)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.chain()
                .title('I am a page title - Sauce Labs')
            .end()
            .done();
    },

    'Can get pagetitle (OK, jQuery style, message, chained)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.chain()
                .title('I am a page title - Sauce Labs', 'Page title is correct')
            .end()
            .done();
    },

    'Can get pagetitle (OK, TDD style, no message, chained)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.chain()
                .title().is('I am a page title - Sauce Labs')
            .end()
            .done();
    },

    'Can get pagetitle (OK, TDD style, message, chained)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.chain()
                .title().is('I am a page title - Sauce Labs', 'Page title is correct')
            .end()
            .done();
    },

    'Can get !pagetitle (OK, jQuery style, no message, chained)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.chain()
                .doesntHaveTitle('I am a page title - Browserling')
            .end()
            .done();
    },

    'Can get !pagetitle (OK, jQuery style, message, chained)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.chain()
                .doesntHaveTitle('I am a page title - Browserling', 'Title is not whatever')
            .end()
            .done();
    },

    'Can get !pagetitle (OK, TDD style, no message, chained)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.chain()
                .title().is.not('I am a page title - Browserling')
            .end()
            .done();
    },

    'Can get !pagetitle (OK, TDD style, message, chained)': function (test) {
        test
            .open('http://localhost:5000')
            .assert.chain()
                .title().is.not('I am a page title - Browserling', 'Title is not whatever')
            .end()
            .done();
    }
};
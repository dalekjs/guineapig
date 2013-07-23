'use strict';
module.exports = {

    // Testsuite name
    name: 'Size - DalekJS guinea pig',

    'Can read height of an element (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.height('#fixed-dimensions', 100)
            .done();
    },

    'Can read width of an element (OK, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.width('#fixed-dimensions', 100)
            .done();
    },

    'Can read width of an element (OK, TDD style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.width('#fixed-dimensions').is(100)
            .done();
    },

    'Can read height of an element (OK, TDD style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.height('#fixed-dimensions').is(100)
            .done();
    },

    'Can read !width of an element (OK, TDD style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.width('#fixed-dimensions').is.not(120)
            .done();
    },

    'Can read !height of an element (OK, TDD style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.height('#fixed-dimensions').is.not(120)
            .done();
    },

    'Can read width of an element (OK, TDD style, no message, between)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.width('#fixed-dimensions').is.between([90, 120])
            .done();
    },

    'Can read height of an element (OK, TDD style, no message, between)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.height('#fixed-dimensions').is.between([90, 120])
            .done();
    },

    'Can read width of an element (OK, TDD style, no message, gt)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.width('#fixed-dimensions').is.gt(90)
            .done();
    },

    'Can read height of an element (OK, TDD style, no message, gt)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.height('#fixed-dimensions').is.gt(90)
            .done();
    },

    'Can read width of an element (OK, TDD style, no message, gte)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.width('#fixed-dimensions').is.gte(90)
            .done();
    },

    'Can read height of an element (OK, TDD style, no message, gte)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.height('#fixed-dimensions').is.gte(90)
            .done();
    },

    'Can read width of an element (OK, TDD style, no message, lt)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.width('#fixed-dimensions').is.lt(120)
            .done();
    },

    'Can read height of an element (OK, TDD style, no message, lt)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.height('#fixed-dimensions').is.lt(120)
            .done();
    },

    'Can read width of an element (OK, TDD style, no message, lte)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.width('#fixed-dimensions').is.lte(120)
            .done();
    },

    'Can read height of an element (OK, TDD style, no message, lte)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.height('#fixed-dimensions').is.lte(120)
            .done();
    },
}
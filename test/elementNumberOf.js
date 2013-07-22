'use strict';
module.exports = {

    // Testsuite name
    name: 'Element NumberOf - DalekJS guinea pig',

    'NumberOfElements (Class, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class', 2)
            .done();
    },

    'NumberOfElements (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is(2)
            .done();
    },

    'NumberOfElements not (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.not(3)
            .done();
    },

    'NumberOfElements between (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.between([2, 5])
            .done();
    },

    'NumberOfElements gt (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.gt(1)
            .done();
    },

    'NumberOfElements gte (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.gte(2)
            .done();
    },

    'NumberOfElements lt (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.lt(5)
            .done();
    },

    'NumberOfElements lte (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.lte(2)
            .done();
    },

    // chain
    'NumberOfElements (Class, jQuery style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfElements('.multi_class', 2)
            .end()
            .done();
    },

    'NumberOfElements (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfElements('.multi_class').is(2)
            .end()
            .done();
    },

    'NumberOfElements not (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfElements('.multi_class').is.not(3)
            .end()
            .done();
    },

    'NumberOfElements between (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfElements('.multi_class').is.between([2, 5])
            .end()
            .done();
    },

    'NumberOfElements gt (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfElements('.multi_class').is.gt(1)
            .end()
            .done();
    },

    'NumberOfElements gte (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfElements('.multi_class').is.gte(2)
            .end()
            .done();
    },

    'NumberOfElements lt (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfElements('.multi_class').is.lt(5)
            .end()
            .done();
    },

    'NumberOfElements lte (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfElements('.multi_class').is.lte(2)
            .end()
            .done();
    },

    // chain, query
    'NumberOfElements (Class, jQuery style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class')
            		.numberOfElements(2)
            	.end()
            .end()
            .done();
    },

    'NumberOfElements (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class')
            		.numberOfElements().is(2)
            	.end()
            .end()
            .done();
    },

    'NumberOfElements not (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class')
            		.numberOfElements().is.not(3)
            	.end()
            .end()
            .done();
    },

    'NumberOfElements between (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class')
            		.numberOfElements().is.between([2, 5])
            	.end()
            .end()
            .done();
    },

    'NumberOfElements gt (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class')
            		.numberOfElements().is.gt(1)
            	.end()
            .end()
            .done();
    },

    'NumberOfElements gte (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class')
            		.numberOfElements().is.gte(2)
            	.end()
            .end()
            .done();
    },

    'NumberOfElements lt (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class')
            		.numberOfElements().is.lt(5)
            	.end()
            .end()
            .done();
    },

    'NumberOfElements lte (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class')
            		.numberOfElements().is.lte(2)
            	.end()
            .end()
            .done();
    },

    // message
    'NumberOfElements (Class, jQuery style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class', 2, 'Is 2')
            .done();
    },

    'NumberOfElements (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is(2, 'Is 2')
            .done();
    },

    'NumberOfElements not (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.not(3, 'Is not 3')
            .done();
    },

    'NumberOfElements between (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.between([2, 5], 'Is between 2 & 5')
            .done();
    },

    'NumberOfElements gt (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.gt(1, 'Greater than 1')
            .done();
    },

    'NumberOfElements gte (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.gte(2, 'Greater than equal 2')
            .done();
    },

    'NumberOfElements lt (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.lt(5, 'Lower than 5')
            .done();
    },

    'NumberOfElements lte (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfElements('.multi_class').is.lte(2, 'Lower than equal 2')
            .done();
    },
};
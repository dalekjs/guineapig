'use strict';
module.exports = {

    // Testsuite name
    name: 'Element NumberOfVisible - DalekJS guinea pig',

    'NumberOfVisibleElements (Class, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis', 2)
            .done();
    },

    'NumberOfVisibleElements (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is(2)
            .done();
    },

    'NumberOfVisibleElements not (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.not(3)
            .done();
    },

    'NumberOfVisibleElements between (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.between([2, 5])
            .done();
    },

    'NumberOfVisibleElements gt (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.gt(1)
            .done();
    },

    'NumberOfVisibleElements gte (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.gte(2)
            .done();
    },

    'NumberOfVisibleElements lt (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.lt(5)
            .done();
    },

    'NumberOfVisibleElements lte (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.lte(2)
            .done();
    },

    // chain
    'NumberOfVisibleElements (Class, jQuery style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfVisibleElements('.multi_class_vis', 2)
            .end()
            .done();
    },

    'NumberOfVisibleElements (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfVisibleElements('.multi_class_vis').is(2)
            .end()
            .done();
    },

    'NumberOfVisibleElements not (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfVisibleElements('.multi_class_vis').is.not(3)
            .end()
            .done();
    },

    'NumberOfVisibleElements between (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfVisibleElements('.multi_class_vis').is.between([2, 5])
            .end()
            .done();
    },

    'NumberOfVisibleElements gt (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfVisibleElements('.multi_class_vis').is.gt(1)
            .end()
            .done();
    },

    'NumberOfVisibleElements gte (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfVisibleElements('.multi_class_vis').is.gte(2)
            .end()
            .done();
    },

    'NumberOfVisibleElements lt (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfVisibleElements('.multi_class_vis').is.lt(5)
            .end()
            .done();
    },

    'NumberOfVisibleElements lte (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.numberOfVisibleElements('.multi_class_vis').is.lte(2)
            .end()
            .done();
    },

    // chain, query
    'NumberOfVisibleElements (Class, jQuery style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class_vis')
            		.numberOfVisibleElements(2)
            	.end()
            .end()
            .done();
    },

    'NumberOfVisibleElements (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class_vis')
            		.numberOfVisibleElements().is(2)
            	.end()
            .end()
            .done();
    },

    'NumberOfVisibleElements not (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class_vis')
            		.numberOfVisibleElements().is.not(3)
            	.end()
            .end()
            .done();
    },

    'NumberOfVisibleElements between (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class_vis')
            		.numberOfVisibleElements().is.between([2, 5])
            	.end()
            .end()
            .done();
    },

    'NumberOfVisibleElements gt (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class_vis')
            		.numberOfVisibleElements().is.gt(1)
            	.end()
            .end()
            .done();
    },

    'NumberOfVisibleElements gte (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class_vis')
            		.numberOfVisibleElements().is.gte(2)
            	.end()
            .end()
            .done();
    },

    'NumberOfVisibleElements lt (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class_vis')
            		.numberOfVisibleElements().is.lt(5)
            	.end()
            .end()
            .done();
    },

    'NumberOfVisibleElements lte (Class, TDD style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.multi_class_vis')
            		.numberOfVisibleElements().is.lte(2)
            	.end()
            .end()
            .done();
    },

    // message
    'NumberOfVisibleElements (Class, jQuery style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis', 2, 'Is 2')
            .done();
    },

    'NumberOfVisibleElements (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is(2, 'Is 2')
            .done();
    },

    'NumberOfVisibleElements not (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.not(3, 'Is not 3')
            .done();
    },

    'NumberOfVisibleElements between (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.between([2, 5], 'Is between 2 & 5')
            .done();
    },

    'NumberOfVisibleElements gt (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.gt(1, 'Greater than 1')
            .done();
    },

    'NumberOfVisibleElements gte (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.gte(2, 'Greater than equal 2')
            .done();
    },

    'NumberOfVisibleElements lt (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.lt(5, 'Lower than 5')
            .done();
    },

    'NumberOfVisibleElements lte (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.numberOfVisibleElements('.multi_class_vis').is.lte(2, 'Lower than equal 2')
            .done();
    }
};
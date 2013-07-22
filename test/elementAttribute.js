'use strict';
module.exports = {

    // Testsuite name
    name: 'Element Attribute - DalekJS guinea pig',

    'Element attribute (Class, jQuery style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.attr('.jumpButton', 'type', 'submit', 'Type is correct')
            .done();
    },

    'Element attribute (Class, jQuery style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.attr('.jumpButton', 'type', 'submit')
            .done();
    },

    'Element attribute (Class, jQuery style, message, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.attr('type', 'submit', 'Type is correct')
            .end()
            .done();
    },

    'Element attribute (Class, jQuery style, no message, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.attr('type', 'submit')
            .end()
            .done();
    },

    'Element attribute (Class, jQuery style, message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.attr('.jumpButton', 'type', 'submit', 'Type is correct')
            .end()
            .done();
    },

    'Element attribute (Class, jQuery style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.attr('.jumpButton', 'type', 'submit')
            .end()
            .done();
    },

    'Element attribute (Class, jQuery style, message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.jumpButton')
	            	.attr('type', 'submit', 'Type is correct')
	            .end()
            .end()
            .done();
    },

    'Element attribute (Class, jQuery style, no message, chain, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.query('.jumpButton')
	            	.attr('type', 'submit')
	            .end()
            .end()
            .done();
    },

    'Element attribute (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.attr('.jumpButton', 'type').is('submit', 'Type is correct')
            .done();
    },

    'Element attribute (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.attr('.jumpButton', 'type').is('submit')
            .done();
    },

    'Element attribute (Class, TDD style, message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.attr('.jumpButton', 'type').is('submit', 'Type is correct')
            .end()
            .done();
    },

    'Element attribute (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.attr('.jumpButton', 'type').is('submit')
            .end()
            .done();
    },

    'Element attribute (Class, TDD style, message, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.attr('type').is('submit', 'Type is correct')
            .end()
            .done();
    },

    'Element attribute (Class, TDD style, no message, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.attr('type').is('submit')
            .end()
            .done();
    },

    'Element attribute (Class, TDD style, message, query, chain, inverted)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.chain()
            		.attr('type').is('submit', 'Type is correct')
            	.end()
            .end()
            .done();
    },

    'Element attribute (Class, TDD style, no message, query, chain, inverted)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.chain()
            		.attr('type').is('submit')
            	.end()
            .end()
            .done();
    },

    // negate
    'Element attribute is not (Class, TDD style, message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.attr('.jumpButton', 'type').is.not('button', 'Type is not incorrect')
            .done();
    },

    'Element attribute is not (Class, TDD style, no message)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.attr('.jumpButton', 'type').is.not('button')
            .done();
    },

    'Element attribute is not (Class, TDD style, message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.attr('.jumpButton', 'type').is.not('button', 'Type is not incorrect')
            .end()
            .done();
    },

    'Element attribute is not (Class, TDD style, no message, chain)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .assert.chain()
            	.attr('.jumpButton', 'type').is.not('button')
            .end()
            .done();
    },

    'Element attribute is not (Class, TDD style, message, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.attr('type').is.not('button', 'Type is not incorrect')
            .end()
            .done();
    },

    'Element attribute is not (Class, TDD style, no message, query)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.attr('type').is.not('button')
            .end()
            .done();
    },

    'Element attribute is not (Class, TDD style, message, query, chain, inverted)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.chain()
            		.attr('type').is.not('button', 'Type is not incorrect')
            	.end()
            .end()
            .done();
    },

    'Element attribute is not (Class, TDD style, no message, query, chain, inverted)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('.jumpButton')
            	.assert.chain()
            		.attr('type').is.not('button')
            	.end()
            .end()
            .done();
    },

    // testing with href
    'Element attribute (href) is (ID, TDD style, no message, query, chain, inverted)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('#top-anchor')
            	.assert.chain()
            		.attr('href').is('https://rawgithub.com/dalekjs/guineapig/master/index.html#top')
            	.end()
            .end()
            .done();
    },

    'Element attribute (href) is not (ID, TDD style, no message, query, chain, inverted)': function (test) {
        test
            .open('https://rawgithub.com/dalekjs/guineapig/master/index.html')
            .query('#top-anchor')
            	.assert.chain()
            		.attr('href').is.not('https://rawgithub.com/dalekjs/guineapig/master/index.html#bottom')
            	.end()
            .end()
            .done();
    }
};
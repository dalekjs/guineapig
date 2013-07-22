'use strict';
module.exports = {

    // Testsuite name
    name: 'Element Text - DalekJS guinea pig',

    // equals, unchain
    'Text equals (ID, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('#i_am_an_id', 'I am a div')
            .done();
    },

    'Text equals (ID, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('#i_am_an_id', 'I am a div', 'It´s a div!')
            .done();
    },

    'Text equals (Class, single, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('.i_am_a_class', 'I am a div')
            .done();
    },

    'Text equals (Class, single, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('.i_am_a_class', 'I am a div', 'It´s a div!')
            .done();
    },

    'Text equals (Tag, single, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('h1', 'This page is a Selenium sandbox')
            .done();
    },

    'Text equals (Tag, single, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('h1', 'This page is a Selenium sandbox', 'It´s a sandbox!')
            .done();
    },

    // equals, unchain, tdd
    'Text equals (ID, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('#i_am_an_id').is('I am a div')
            .done();
    },

    'Text equals (ID, TDD style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('#i_am_an_id').is('I am a div', 'It´s a div!')
            .done();
    },

    'Text equals (Class, single, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('.i_am_a_class').is('I am a div')
            .done();
    },

    'Text equals (Class, single, TDD style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('.i_am_a_class').is('I am a div', 'It´s a div!')
            .done();
    },

    'Text equals (Tag, single, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('h1').is('This page is a Selenium sandbox')
            .done();
    },

    'Text equals (Tag, single, TDD style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('h1').is('This page is a Selenium sandbox', 'It´s a sandbox!')
            .done();
    },

    // doesnt equal, unchain
    'Doesnt have Text (ID, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntHaveText('#i_am_an_id', 'I am a span')
            .done();
    },

    'Doesnt have Text (ID, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntHaveText('#i_am_an_id', 'I am a span', 'It´s not a div!')
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntHaveText('.i_am_a_class', 'I am a span')
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntHaveText('.i_am_a_class', 'I am a span', 'It´s not a div!')
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntHaveText('h1', 'This page is a Dalek sandbox')
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntHaveText('h1', 'This page is a Dalek sandbox', 'It´s a sandbox!')
            .done();
    },

    // equals, chain
    'Text equals (ID, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('#i_am_an_id', 'I am a div')
            .end()
            .done();
    },

    'Text equals (ID, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('#i_am_an_id', 'I am a div', 'It´s a div!')
            .end()
            .done();
    },

    'Text equals (Class, single, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('.i_am_a_class', 'I am a div')
            .end()
            .done();
    },

    'Text equals (Class, single, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('.i_am_a_class', 'I am a div', 'It´s a div!')
            .end()
            .done();
    },

    'Text equals (Tag, single, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('h1', 'This page is a Selenium sandbox')
            .end()
            .done();
    },

    'Text equals (Tag, single, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('h1', 'This page is a Selenium sandbox', 'It´s a sandbox!')
            .end()
            .done();
    },

	// doesnt equal, chain
    'Doesnt have Text (ID, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntHaveText('#i_am_an_id', 'I am a span')
            .end()
            .done();
    },

    'Doesnt have Text (ID, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntHaveText('#i_am_an_id', 'I am a span', 'It´s not a div!')
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntHaveText('.i_am_a_class', 'I am a span')
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntHaveText('.i_am_a_class', 'I am a span', 'It´s not a div!')
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntHaveText('h1', 'This page is a Dalek sandbox')
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntHaveText('h1', 'This page is a Dalek sandbox', 'It´s a sandbox!')
            .end()
            .done();
    },

    // unequals, unchain, tdd
    'Doesnt have Text (ID, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('#i_am_an_id').is.not('I am a span')
            .done();
    },

    'Doesnt have Text (ID, TDD style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('#i_am_an_id').is.not('I am a span', 'It´s not a span!')
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('.i_am_a_class').is.not('I am a span')
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('.i_am_a_class').is.not('I am a span', 'It´s not a span!')
            .done();
    },

    'Doesnt have Text (Tag, single, TDD style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.text('h1').is.not('This page is a Dalek sandbox')
            .done();
    },

    // unequals, chain, tdd
    'Doesnt have Text (ID, TDD style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('#i_am_an_id').is.not('I am a span')
            .end()
            .done();
    },

    'Doesnt have Text (ID, TDD style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('#i_am_an_id').is.not('I am a span', 'It´s not a span!')
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('.i_am_a_class').is.not('I am a span')
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('.i_am_a_class').is.not('I am a span', 'It´s not a span!')
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, TDD style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.text('h1').is.not('This page is a Dalek sandbox')
            .end()
            .done();
    },

    // query
    // equals, unchain
    'Text equals (ID, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.text('I am a div')
            .end()
            .done();
    },

    'Text equals (ID, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.text('I am a div', 'It´s a div!')
            .end()
            .done();
    },

    'Text equals (Class, single, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.text('I am a div')
            .end()
            .done();
    },

    'Text equals (Class, single, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.text('I am a div', 'It´s a div!')
            .end()
            .done();
    },

    'Text equals (Tag, single, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.text('This page is a Selenium sandbox')
            .end()
            .done();
    },

    'Text equals (Tag, single, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.text('This page is a Selenium sandbox', 'It´s a sandbox!')
            .end()
            .done();
    },

    // equals, unchain, tdd
    'Text equals (ID, TDD style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.text().is('I am a div')
            .end()
            .done();
    },

    'Text equals (ID, TDD style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.text().is('I am a div', 'It´s a div!')
            .end()
            .done();
    },

    'Text equals (Class, single, TDD style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.text().is('I am a div')
            .end()
            .done();
    },

    'Text equals (Class, single, TDD style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.text().is('I am a div', 'It´s a div!')
            .end()
            .done();
    },

    'Text equals (Tag, single, TDD style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.text().is('This page is a Selenium sandbox')
            .end()
            .done();
    },

    'Text equals (Tag, single, TDD style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.text().is('This page is a Selenium sandbox', 'It´s a sandbox!')
            .end()
            .done();
    },

    // doesnt equal, unchain
    'Doesnt have Text (ID, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.doesntHaveText('I am a span')
            .end()
            .done();
    },

    'Doesnt have Text (ID, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.doesntHaveText('I am a span', 'It´s not a div!')
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.doesntHaveText('I am a span')
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.doesntHaveText('I am a span', 'It´s not a div!')
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.doesntHaveText('This page is a Dalek sandbox')
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.doesntHaveText('This page is a Dalek sandbox', 'It´s a sandbox!')
            .end()
            .done();
    },

    // equals, chain
    'Text equals (ID, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('#i_am_an_id')
            		.text('I am a div')
            	.end()
            .end()
            .done();
    },

    'Text equals (ID, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('#i_am_an_id')
            		.text('I am a div', 'It´s a div!')
            	.end()
            .end()
            .done();
    },

    'Text equals (Class, single, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('.i_am_a_class')
            		.text('I am a div')
            	.end()
            .end()
            .done();
    },

    'Text equals (Class, single, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('.i_am_a_class')
            		.text('I am a div', 'It´s a div!')
            	.end()
            .end()
            .done();
    },

    'Text equals (Tag, single, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('h1')
            		.text('This page is a Selenium sandbox')
            	.end()
            .end()
            .done();
    },

    'Text equals (Tag, single, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('h1')
            		.text('This page is a Selenium sandbox', 'It´s a sandbox!')
            	.end()
            .end()
            .done();
    },

	// doesnt equal, chain
    'Doesnt have Text (ID, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('#i_am_an_id')
            		.doesntHaveText('I am a span')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (ID, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('#i_am_an_id')
            		.doesntHaveText('I am a span', 'It´s not a div!')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('.i_am_a_class')
            		.doesntHaveText('I am a span')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('.i_am_a_class')
            		.doesntHaveText('I am a span', 'It´s not a div!')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('h1')
            		.doesntHaveText('This page is a Dalek sandbox')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('h1')
            		.doesntHaveText('This page is a Dalek sandbox', 'It´s a sandbox!')
            	.end()
            .end()
            .done();
    },

    // unequals, unchain, tdd
    'Doesnt have Text (ID, TDD style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.text().is.not('I am a span')
            .end()
            .done();
    },

    'Doesnt have Text (ID, TDD style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.text().is.not('I am a span', 'It´s not a span!')
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.text().is.not('I am a span')
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.text().is.not('I am a span', 'It´s not a span!')
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, TDD style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.text().is.not('This page is a Dalek sandbox')
            .end()
            .done();
    },

    // unequals, chain, tdd
    'Doesnt have Text (ID, TDD style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('#i_am_an_id')
            		.text().is.not('I am a span')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (ID, TDD style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('#i_am_an_id')
            		.text().is.not('I am a span', 'It´s not a span!')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('.i_am_a_class')
            		.text().is.not('I am a span')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('.i_am_a_class')
            		.text().is.not('I am a span', 'It´s not a span!')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, TDD style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('h1')
            		.text().is.not('This page is a Dalek sandbox')
            	.end()
            .end()
            .done();
    },

    // query, inverted
    // equals, chain
    'Text equals (ID, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.query('#i_am_an_id')
            		.text('I am a div')
            	.end()
            .end()
            .done();
    },

    'Text equals (ID, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.chain()
            		.text('I am a div', 'It´s a div!')
            	.end()
            .end()
            .done();
    },

    'Text equals (Class, single, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.chain()
            		.text('I am a div')
            	.end()
            .end()
            .done();
    },

    'Text equals (Class, single, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
        	.query('.i_am_a_class')
	            .assert.chain()
            		.text('I am a div', 'It´s a div!')
            	.end()
            .end()
            .done();
    },

    'Text equals (Tag, single, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
        	.query('h1')
	            .assert.chain()
            		.text('This page is a Selenium sandbox')
            	.end()
            .end()
            .done();
    },

    'Text equals (Tag, single, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.chain()
            		.text('This page is a Selenium sandbox', 'It´s a sandbox!')
            	.end()
            .end()
            .done();
    },

	// doesnt equal, chain
    'Doesnt have Text (ID, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.chain()
            		.doesntHaveText('I am a span')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (ID, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.chain()
            		.doesntHaveText('I am a span', 'It´s not a div!')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
            	.assert.chain()
            		.doesntHaveText('I am a span')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
        	.query('.i_am_a_class')
	            .assert.chain()
            		.doesntHaveText('I am a span', 'It´s not a div!')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.chain()
            		.doesntHaveText('This page is a Dalek sandbox')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.chain()
            		.doesntHaveText('This page is a Dalek sandbox', 'It´s a sandbox!')
            	.end()
            .end()
            .done();
    },

    // unequals, chain, tdd
    'Doesnt have Text (ID, TDD style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
            	.assert.chain()
            		.text().is.not('I am a span')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (ID, TDD style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
	            .assert.chain()
            		.text().is.not('I am a span', 'It´s not a span!')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
	            .assert.chain()
            		.text().is.not('I am a span')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Class, single, TDD style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
	            .assert.chain()
            		.text().is.not('I am a span', 'It´s not a span!')
            	.end()
            .end()
            .done();
    },

    'Doesnt have Text (Tag, single, TDD style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
            	.assert.chain()
            		.text().is.not('This page is a Dalek sandbox')
            	.end()
            .end()
            .done();
    },

};
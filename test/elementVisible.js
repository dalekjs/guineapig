'use strict';
module.exports = {

    // Testsuite name
    name: 'Element Visible - DalekJS guinea pig',

    'Element visible (ID, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.visible('#i_am_an_id')
            .done();
    },

    'Element visible (ID, jQuery style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.visible('#i_am_an_id', 'Element is visible')
            .done();
    },

    'Element visible (Class, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.visible('.i_am_a_class')
            .done();
    },

    'Element visible (Class, jQuery style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.visible('.i_am_a_class', 'Element is visible')
            .done();
    },

    'Element visible (Tag, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.visible('h1')
            .done();
    },

    'Element visible (Tag, jQuery style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.visible('h1', 'Element is visible')
            .done();
    },

    // visible, query
    'Element visible (ID, jQuery style, no message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('#i_am_an_id')
            	.assert.visible()
            .end()
            .done();
    },

    'Element visible (ID, jQuery style, message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('#i_am_an_id')
            	.assert.visible('Element is visible')
            .end()
            .done();
    },

    'Element visible (Class, jQuery style, no message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('.i_am_a_class')
            	.assert.visible()
            .end()
            .done();
    },

    'Element visible (Class, jQuery style, message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('.i_am_a_class')
            	.assert.visible('Element is visible')
            .end()
            .done();
    },

    'Element visible (Tag, jQuery style, no message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('h1')
            	.assert.visible()
            .end()
            .done();
    },

    'Element visible (Tag, jQuery style, message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('h1')
            	.assert.visible('Element is visible')
            .end()
            .done();
    },

    // visible, chain
    'Element visible (ID, jQuery style, no message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.visible('#i_am_an_id')
            .end()
            .done();
    },

    'Element visible (ID, jQuery style, message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.visible('#i_am_an_id', 'Element is visible')
            .end()
            .done();
    },

    'Element visible (Class, jQuery style, no message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.visible('.i_am_a_class')
            .end()
            .done();
    },

    'Element visible (Class, jQuery style, message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.visible('.i_am_a_class', 'Element is visible')
            .end()
            .done();
    },

    'Element visible (Tag, jQuery style, no message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.visible('h1')
            .end()
            .done();
    },

    'Element visible (Tag, jQuery style, message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.visible('h1', 'Element is visible')
            .end()
            .done();
    },

    // visible, chain, query
    'Element visible (ID, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('#i_am_an_id')
            		.visible()
            	.end()
            .end()
            .done();
    },

    'Element visible (ID, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('#i_am_an_id')
            		.visible('Element is visible')
            	.end()
            .end()
            .done();
    },

    'Element visible (Class, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('.i_am_a_class')
            		.visible()
            	.end()
            .end()
            .done();
    },

    'Element visible (Class, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('.i_am_a_class')
            		.visible('Element is visible')
            	.end()
            .end()
            .done();
    },

    'Element visible (Tag, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('h1')
            		.visible()
            	.end()
            .end()
            .done();
    },

    'Element visible (Tag, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('h1')
            		.visible('Element is visible')
            	.end()
            .end()
            .done();
    },

    // visible, chain, query, inverted
    'Element visible (ID, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
        	.query('#i_am_an_id')
            	.assert.chain()
            		.visible()
            	.end()
            .end()
            .done();
    },

    'Element visible (ID, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
        	.query('#i_am_an_id')
            	.assert.chain()
            		.visible('Element is visible')
            	.end()
            .end()
            .done();
    },

    'Element visible (Class, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('.i_am_a_class')
            	.assert.chain()
            		.visible()
            	.end()
            .end()
            .done();
    },

    'Element visible (Class, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('.i_am_a_class')
            	.assert.chain()
            		.visible('Element is visible')
            	.end()
            .end()
            .done();
    },

    'Element visible (Tag, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
        	.query('h1')
            	.assert.chain()
            		.visible()
            	.end()
            .end()
            .done();
    },

    'Element visible (Tag, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('h1')
            	.assert.chain()
            		.visible('Element is visible')
            	.end()
            .end()
            .done();
    },

    // invisible
    'Element invisible (ID, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.notVisible('#invisible-div')
            .done();
    },

    'Element invisible (ID, jQuery style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.notVisible('#invisible-div', 'Element is invisible')
            .done();
    },

    'Element invisible (Class, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.notVisible('.jumpOkButton')
            .done();
    },

    'Element invisible (Class, jQuery style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.notVisible('.jumpOkButton', 'Element is invisible')
            .done();
    },

    'Element invisible (Tag, jQuery style, no message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.notVisible('h4')
            .done();
    },

    'Element invisible (Tag, jQuery style, message)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.notVisible('h4', 'Element is invisible')
            .done();
    },

    // invisible, query
    'Element invisible (ID, jQuery style, no message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('#invisible-div')
            	.assert.notVisible()
            .end()
            .done();
    },

    'Element invisible (ID, jQuery style, message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('#invisible-div')
            	.assert.notVisible('Element is invisible')
            .end()
            .done();
    },

    'Element invisible (Class, jQuery style, no message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('.jumpOkButton')
            	.assert.notVisible()
            .end()
            .done();
    },

    'Element invisible (Class, jQuery style, message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('.jumpOkButton')
            	.assert.notVisible('Element is invisible')
            .end()
            .done();
    },

    'Element invisible (Tag, jQuery style, no message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('h4')
            	.assert.notVisible()
            .end()
            .done();
    },

    'Element invisible (Tag, jQuery style, message, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('h4')
            	.assert.notVisible('Element is invisible')
            .end()
            .done();
    },

    // invisible, chain
    'Element invisible (ID, jQuery style, no message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.notVisible('#invisible-div')
            .end()
            .done();
    },

    'Element invisible (ID, jQuery style, message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.notVisible('#invisible-div', 'Element is invisible')
            .end()
            .done();
    },

    'Element invisible (Class, jQuery style, no message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.notVisible('.jumpOkButton')
            .end()
            .done();
    },

    'Element invisible (Class, jQuery style, message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.notVisible('.jumpOkButton', 'Element is invisible')
            .end()
            .done();
    },

    'Element invisible (Tag, jQuery style, no message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.notVisible('h4')
            .end()
            .done();
    },

    'Element invisible (Tag, jQuery style, message, chain)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.notVisible('h4', 'Element is invisible')
            .end()
            .done();
    },

    // invisible, chain, query
    'Element invisible (ID, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('#invisible-div')
            		.notVisible()
            	.end()
            .end()
            .done();
    },

    'Element invisible (ID, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('#invisible-div')
            		.notVisible('Element is invisible')
             	.end()
            .end()
            .done();
    },

    'Element invisible (Class, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('.jumpOkButton')
            		.notVisible()
            	.end()
            .end()
            .done();
    },

    'Element invisible (Class, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('.jumpOkButton')
            		.notVisible('Element is invisible')
            	.end()
            .end()
            .done();
    },

    'Element invisible (Tag, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('h4')
            		.notVisible()
            	.end()
            .end()
            .done();
    },

    'Element invisible (Tag, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .assert.chain()
            	.query('h4')
            		.notVisible('Element is invisible')
            	.end()
            .end()
            .done();
    },

    // invisible, chain, query, inverted
    'Element invisible (ID, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('#invisible-div')
            	.assert.chain()
            		.notVisible()
            	.end()
            .end()
            .done();
    },

    'Element invisible (ID, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('#invisible-div')
            	.assert.chain()
            		.notVisible('Element is invisible')
             	.end()
            .end()
            .done();
    },

    'Element invisible (Class, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('.jumpOkButton')
            	.assert.chain()
            		.notVisible()
            	.end()
            .end()
            .done();
    },

    'Element invisible (Class, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('.jumpOkButton')
            	.assert.chain()
            		.notVisible('Element is invisible')
            	.end()
            .end()
            .done();
    },

    'Element invisible (Tag, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
        	.query('h4')
            	.assert.chain()
            		.notVisible()
            	.end()
            .end()
            .done();
    },

    'Element invisible (Tag, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://dalekjs.com/guineapig/')
            .query('h4')
            	.assert.chain()
            		.notVisible('Element is invisible')
            	.end()
            .end()
            .done();
    }

}
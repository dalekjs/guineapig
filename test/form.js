'use strict';
module.exports = {

    // Testsuite name
    name: 'Form - DalekJS guinea pig',

    'can fill input field': function (test) {
    	test
    		.open('http://localhost:5000')
    		.query('#i_am_a_textbox')
    			.type('TEST')
    			.assert.attr('value', 'TEST', 'adding text to a form works')
    		.end()
    		.done();
    },

    'can fill a textarea field': function (test) {
    	test
    		.open('http://localhost:5000')
    		.query('textarea')
    			.type('I am a long text & maybe I will be converted to lorem ipsum anytime soon, but I also like the quick brown fox, tough decision')
    			.assert.attr('value', 'I am a long text & maybe I will be converted to lorem ipsum anytime soon, but I also like the quick brown fox, tough decision', 'adding text to a form works')
    		.end()
    		.done();
    },

    'can submit a form': function (test) {
    	var text = 'I am a long text & maybe I will be converted to lorem ipsum anytime soon, but I also like the quick brown fox, tough decision';

    	test
    		.open('http://localhost:5000')
    		.query('#fbemail')
    			.type('dalekjs@asciidisco.com')
    			.assert.attr('value', 'dalekjs@asciidisco.com', 'adding text to a form works')
    		.end()
    		.query('textarea')
    			.type(text)
    			.assert.attr('value', text, 'adding text to a form works')
    		.end()
    		.submit('#jumpContact')
    		.assert.chain()
    			.text('#comment_value', text, 'Dynamically created text, rocks')
    			.text('#email_value', 'dalekjs@asciidisco.com', 'Dynamically created text, rocks, dude')
    		.end()
    		.done();
    }
};
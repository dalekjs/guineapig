'use strict';
module.exports = {

    // Testsuite name
    name: 'Element Exists - DalekJS guinea pig',

    'Element exists (ID, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('#i_am_an_id')
            .done();
    },

    'Element exists (ID, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('#i_am_an_id', 'Element exists')
            .done();
    },

    'Single Element exists (Class, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('.i_am_a_class')
            .done();
    },

    'Single Element exists (Class, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('.i_am_a_class', 'Element exists')
            .done();
    },

    'Single Element exists (Tag, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('h1')
            .done();
    },

    'Single Element exists (Tag, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('h1', 'Element exists')
            .done();
    },

    'Multi Element exists (Class, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('.multi_class')
            .done();
    },

    'Multi Element exists (Class, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('.multi_class', 'Element exists')
            .done();
    },

    'Multi Element exists (Tag, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('div')
            .done();
    },

    'Multi Element exists (Tag, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.exists('div', 'Element exists')
            .done();
    },

    'Element exists not (ID, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntExist('#i_am_an_non_existing_id')
            .done();
    },

    'Element exists not (ID, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntExist('#i_am_an_non_existing_id', 'Element does not exist')
            .done();
    },

    'Element exists not (Class, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntExist('.i_am_a_non_existing_class')
            .done();
    },

    'Element exists not (Class, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntExist('.i_am_a_non_existing_class', 'Element does not exist')
            .done();
    },

    'Element exists not (Tag, jQuery style, no message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntExist('h6')
            .done();
    },

    'Element exists not (Tag, jQuery style, message)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.doesntExist('h6', 'Element does not exist')
            .done();
    },

    'Element exists (ID, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('#i_am_an_id')
            .end()
            .done();
    },

    'Element exists (ID, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('#i_am_an_id', 'Element exists')
            .end()
            .done();
    },

    'Single Element exists (Class, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('.i_am_a_class')
            .end()
            .done();
    },

    'Single Element exists (Class, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('.i_am_a_class', 'Element exists')
            .end()
            .done();
    },

    'Single Element exists (Tag, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('h1')
            .end()
            .done();
    },

    'Single Element exists (Tag, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('h1', 'Element exists')
            .end()
            .done();
    },

    'Multi Element exists (Class, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('.multi_class')
            .end()
            .done();
    },

    'Multi Element exists (Class, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('.multi_class', 'Element exists')
            .end()
            .done();
    },

    'Multi Element exists (Tag, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('div')
            .end()
            .done();
    },

    'Multi Element exists (Tag, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.exists('div', 'Element exists')
            .end()
            .done();
    },

    'Element exists not (ID, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntExist('#i_am_an_non_existing_id')
            .end()
            .done();
    },

    'Element exists not (ID, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntExist('#i_am_an_non_existing_id', 'Element does not exist')
            .end()
            .done();
    },

    'Element exists not (Class, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntExist('.i_am_a_non_existing_class')
            .end()
            .done();
    },

    'Element exists not (Class, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntExist('.i_am_a_non_existing_class', 'Element does not exist')
            .end()
            .done();
    },

    'Element exists not (Tag, jQuery style, no message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntExist('h6')
            .end()
            .done();
    },

    'Element exists not (Tag, jQuery style, message, chain)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
            	.doesntExist('h6', 'Element does not exist')
            .end()
            .done();
    },

    // query
    'Element exists (ID, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
                .assert.exists()
            .end()
            .done();
    },

    'Element exists (ID, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
                .assert.exists('Element exists')
            .end()
            .done();
    },

    'Single Element exists (Class, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
                .assert.exists()
            .end()
            .done();
    },

    'Single Element exists (Class, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
                .assert.exists('Element exists')
            .end()
            .done();
    },

    'Single Element exists (Tag, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
                .assert.exists()
            .end()
            .done();
    },

    'Single Element exists (Tag, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
                .assert.exists('Element exists')
            .end()
            .done();
    },

    'Multi Element exists (Class, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.multi_class')
                .assert.exists()
            .end()
            .done();
    },

    'Multi Element exists (Class, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.multi_class')
                .assert.exists('Element exists')
            .end()
            .done();
    },

    'Multi Element exists (Tag, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('div')
                .assert.exists()
            .end()
            .done();
    },

    'Multi Element exists (Tag, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('div')
                .assert.exists('Element exists')
            .end()
            .done();
    },

    'Element exists not (ID, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_non_existing_id')
                .assert.doesntExist()
            .end()
            .done();
    },

    'Element exists not (ID, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_non_existing_id')
                .assert.doesntExist('Element does not exist')
            .end()
            .done();
    },

    'Element exists not (Class, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_non_existing_class')
                .assert.doesntExist()
            .end()
            .done();
    },

    'Element exists not (Class, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_non_existing_class')
                .assert.doesntExist('Element does not exist')
            .end()
            .done();
    },

    'Element exists not (Tag, jQuery style, no message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h6')
                .assert.doesntExist('h6')
            .end()
            .done();
    },

    'Element exists not (Tag, jQuery style, message, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h6')
                .assert.doesntExist('Element does not exist')
            .end()
            .done();
    },

    'Element exists (ID, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('#i_am_an_id')
                    .exists()
                .end()
            .end()
            .done();
    },

    'Element exists (ID, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('#i_am_an_id')
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Single Element exists (Class, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('.i_am_a_class')
                    .exists()
                .end()
            .end()
            .done();
    },

    'Single Element exists (Class, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('.i_am_a_class')
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Single Element exists (Tag, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('h1')
                    .exists()
                .end()
            .end()
            .done();
    },

    'Single Element exists (Tag, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('h1')
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Multi Element exists (Class, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('.multi_class')
                    .exists()
                .end()
            .end()
            .done();
    },

    'Multi Element exists (Class, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('.multi_class')
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Multi Element exists (Tag, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('div')
                    .exists()
                .end()
            .end()
            .done();
    },

    'Multi Element exists (Tag, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('div')
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Element exists not (ID, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('#i_am_an_non_existing_id')
                    .doesntExist()
                .end()
            .end()
            .done();
    },

    'Element exists not (ID, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('#i_am_an_non_existing_id')
                    .doesntExist('Element does not exist')
                .end()
            .end()
            .done();
    },

    'Element exists not (Class, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('.i_am_a_non_existing_class')
                    .doesntExist()
                .end()
            .end()
            .done();
    },

    'Element exists not (Class, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('.i_am_a_non_existing_class')
                    .doesntExist('Element does not exist')
                .end()
            .end()
            .done();
    },

    'Element exists not (Tag, jQuery style, no message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('h6')
                    .doesntExist()
                .end()
            .end()
            .done();
    },

    'Element exists not (Tag, jQuery style, message, chain, query)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .assert.chain()
                .query('h6')
                    .doesntExist('Element does not exist')
                .end()
            .end()
            .done();
    },

    // query, inverted
    'Element exists (ID, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
                .assert.chain()
                    .exists()
                .end()
            .end()
            .done();
    },

    'Element exists (ID, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_id')
                .assert.chain()
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Single Element exists (Class, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
                .assert.chain()
                    .exists()
                .end()
            .end()
            .done();
    },

    'Single Element exists (Class, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_class')
                .assert.chain()
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Single Element exists (Tag, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
                .assert.chain()
                    .exists()
                .end()
            .end()
            .done();
    },

    'Single Element exists (Tag, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h1')
                .assert.chain()
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Multi Element exists (Class, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.multi_class')
                .assert.chain()
                    .exists()
                .end()
            .end()
            .done();
    },

    'Multi Element exists (Class, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.multi_class')
                .assert.chain()
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Multi Element exists (Tag, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('div')
                .assert.chain()
                    .exists()
                .end()
            .end()
            .done();
    },

    'Multi Element exists (Tag, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('div')
                .assert.chain()
                    .exists('Element exists')
                .end()
            .end()
            .done();
    },

    'Element exists not (ID, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_non_existing_id')
                .assert.chain()
                    .doesntExist()
                .end()
            .end()
            .done();
    },

    'Element exists not (ID, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('#i_am_an_non_existing_id')
                .assert.chain()
                    .doesntExist('Element does not exist')
                .end()
            .end()
            .done();
    },

    'Element exists not (Class, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_non_existing_class')
                .assert.chain()
                    .doesntExist()
                .end()
            .end()
            .done();
    },

    'Element exists not (Class, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('.i_am_a_non_existing_class')
                .assert.chain()
                    .doesntExist('Element does not exist')
                .end()
            .end()
            .done();
    },

    'Element exists not (Tag, jQuery style, no message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h6')
                .assert.chain()
                    .doesntExist()
                .end()
            .end()
            .done();
    },

    'Element exists not (Tag, jQuery style, message, chain, query, inverted)': function (test) {
        test
            .open('http://localhost:5000/index.html')
            .query('h6')
                .assert.chain()
                    .doesntExist('Element does not exist')
                .end()
            .end()
            .done();
    }
};